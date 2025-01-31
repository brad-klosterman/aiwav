terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/cluster-compute"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/cluster-compute"
    project     = "wer1-prod"
    environment = "prod"
  }
  remote_state_config = {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    base_key       = "wer1-prod"
    region         = "eu-west-1"
    encrypt        = true
  }
  instance_types = [
    "t3a.medium",
    "t3.medium",
    "t3a.large",
    "t3.large",
    "t3a.xlarge",
    "t3.xlarge",
    "c7a.xlarge",
    "r7i.xlarge"
  ]
}

module "cluster_compute" {
  source                       = "app.terraform.io/lsdopen/eks-blueprint-cluster-compute/aws"
  version                      = "1.4.0"
  cluster_name                 = data.terraform_remote_state.cluster.outputs.cluster_name
  private_subnets              = data.terraform_remote_state.networking.outputs.private_subnets
  azs                          = data.terraform_remote_state.networking.outputs.azs
  detailed_node_monitoring     = false
  seccomp                      = true
  namespace                    = "cluster-system"
  karpenter                    = true
  aws_node_termination_handler = true
  self_managed_node_groups = {
    default = {
      max_size       = 3
      min_size       = 3
      instance_types = local.instance_types
      type           = "spot"
      root_disk_size = 40
    },
    scale = {
      instance_types = local.instance_types
      type           = "spot"
      root_disk_size = 40
      autoscale_limits = {
        cpu    = 30
        memory = 100
      }
      autoscale = true
    }
  }
  default_replica_count = 2
  tags                  = local.tags
  enable_spot_api       = false
}
