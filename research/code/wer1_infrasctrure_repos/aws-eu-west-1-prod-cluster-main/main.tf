terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/cluster"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/cluster"
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
}

module "cluster" {
  source                                 = "app.terraform.io/lsdopen/eks-blueprint-cluster/aws"
  version                                = "4.1.0"
  cluster_name                           = data.terraform_remote_state.networking.outputs.cluster_name
  cluster_version                        = "1.30"
  public_cluster                         = false
  private_cluster                        = true
  azs                                    = data.terraform_remote_state.networking.outputs.azs
  vpc_id                                 = data.terraform_remote_state.networking.outputs.vpc_id
  pod_subnets                            = data.terraform_remote_state.networking.outputs.pod_subnets
  private_subnets                        = data.terraform_remote_state.networking.outputs.private_subnets
  control_plane_ingress_cidr_blocks      = data.terraform_remote_state.networking.outputs.organisation_cidr_blocks
  cloudwatch_log_group_retention_in_days = 1
  cluster_enabled_log_types              = []
  cluster_secret_encryption              = true
  cluster_admins = [
    "arn:aws:iam::956022059432:role/aws-reserved/sso.amazonaws.com/eu-west-1/AWSReservedSSO_AWSAdministratorAccess_47f2bdf6c3eccf72",
    data.terraform_remote_state.iam.outputs.iam_role_arn,
  ]
  manage_vpc_cni_config_map = false
}
