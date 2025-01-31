terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/vpn"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/vpn"
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

module "vpn" {
  source            = "app.terraform.io/lsdopen/tailscale-subnet-router/aws"
  version           = "1.12.0"
  vpc_id            = data.terraform_remote_state.networking.outputs.vpc_id
  subnet_ids        = data.terraform_remote_state.networking.outputs.private_subnets
  authkey           = var.authkey
  acl_tag           = "tag:prod-subnetrouters"
  use_spot_instance = true
  tags              = local.tags
}
