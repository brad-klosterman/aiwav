terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/github-runner"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/github-runner"
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

#module "github_runner" {
#  source                 = "app.terraform.io/lsdopen/eks-blueprint-github-runner/aws"
#  version                = "1.14.1"
#  private_subnets        = data.terraform_remote_state.networking.outputs.private_subnets
#  vpc_id                 = data.terraform_remote_state.networking.outputs.vpc_id
#  cluster_name           = data.terraform_remote_state.networking.outputs.cluster_name
#  tags                   = local.tags
#  github_app_id          = var.github_app_id
#  github_app_private_key = var.github_app_private_key
#  github_org             = "WeR1Hub"
#  github_runner_labels   = ["aws-eu-west-1-prod"]
#  use_spot_instance      = true
#  instance_types         = ["t3.small", "t3a.small", "t4g.small"]
#}
