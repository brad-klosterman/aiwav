terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/github-repositories"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/github-repositories"
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

module "github_repositories" {
  source      = "app.terraform.io/lsdopen/eks-blueprint-github-repositories/aws"
  version     = "2.2.0"
  cloud       = "aws"
  region      = "eu-west-1"
  environment = local.tags.environment

  repositories = [
    "app-admin",    # backend admin portals
    "app-customer", # frontend for playback users
    "app-djland",   # fronted for dj users
    "app-graph",    # graph api
    "app-cd",       # k8 continuous delivery
    "auth-zero",
    "bastion",
    "budgeting",
    "cache",
    "cluster",
    "cluster-compute",
    "cluster-system",
    "cognito",
    "container-repositories",
    "database",
    "dns",
    "github-repositories",
    "github-runner",
    "governance",
    "iam",
    "networking",
    "observability",
    "search",
    "storage",
    "vpn",
  ]
  secrets = {
    "TF_TOKEN_APP_TERRAFORM_IO" : var.token_app_terraform_io
    "TAILSCALE_CLIENT_ID" : var.tailscale_client_id
    "TAILSCALE_SECRET" : var.tailscale_secret
    "TAILSCALE_TAGS" : var.tailscale_tags
  }
  variables = {
    "AWS_ASSUME_ROLE_ARN" : data.terraform_remote_state.iam.outputs.iam_role_arn
    "AWS_ASSUME_ROLE_REGION" : local.remote_state_config.region
  }
  teams = [
    {
      name       = "lsd",
      permission = "admin",
    },
    {
      name       = "developers",
      permission = "push",
    }
  ]

  dependabot_secrets = {
    "TF_TOKEN_APP_TERRAFORM_IO" : var.token_app_terraform_io
  }
}
