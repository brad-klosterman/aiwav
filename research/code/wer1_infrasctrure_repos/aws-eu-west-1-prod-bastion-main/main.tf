terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/bastion"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/bastion"
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

module "bastion" {
  source            = "app.terraform.io/lsdopen/eks-blueprint-bastion/aws"
  version           = "1.16.0"
  cluster_name      = data.terraform_remote_state.networking.outputs.cluster_name
  vpc_id            = data.terraform_remote_state.networking.outputs.vpc_id
  private_subnets   = data.terraform_remote_state.networking.outputs.private_subnets
  use_spot_instance = true
  tags              = local.tags
}
