terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/cluster-system"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/cluster-system"
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

module "cluster_system" {
  source       = "app.terraform.io/lsdopen/eks-blueprint-cluster-system/aws"
  version      = "5.6.0"
  cluster_name = data.terraform_remote_state.cluster.outputs.cluster_name
  ingress = {
    "nginx-private" = {
      public             = false
      default            = true
      route_53_zone_id   = data.terraform_remote_state.dns.outputs.private_route_53_zone_id
      lets_encrypt_email = "support+wer1-certificates@lsdopen.io"
      cidr_blocks        = data.terraform_remote_state.networking.outputs.organisation_cidr_blocks
    }
    "nginx-public" = {
      public             = true
      default            = false
      route_53_zone_id   = data.terraform_remote_state.dns.outputs.public_route_53_zone_id
      lets_encrypt_email = "support+wer1-certificates@lsdopen.io"
      cidr_blocks        = ["0.0.0.0/0", "::/0"]
    }
  }
  vpc_id                = data.terraform_remote_state.networking.outputs.vpc_id
  default_replica_count = 2
}
