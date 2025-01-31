terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/iam"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/iam"
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

module "iam" {
  source  = "app.terraform.io/lsdopen/eks-blueprint-iam/aws"
  version = "1.14.0"
  github  = true
  github_repo_names = [
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-iam",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-cache",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-cognito",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-networking",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-bastion",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-cluster",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-cluster-compute",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-cluster-system",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-dns",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-github-runner",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-observability",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-storage",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-database",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-governance",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-container-repositories",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-vpn",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-auth-zero",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-app-admin",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-app-customer",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-app-djland",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-app-graph",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-budgeting",
    "WeR1Hub/aws-eu-west-1-${local.tags.environment}-fluxcd",
  ]
  eks_creator_additional_statements = [
    {
      effect    = "Allow"
      resources = ["*"]
      actions = [
        "iam:*User",
        "iam:*AccessKey",
        "iam:*AccessKeys",
        "iam:*UserPolicies",
        "iam:ListOpenIDConnectProviders",
      ]
    }
  ]
  eks_creator_assume_role_identifiers = [
    "arn:aws:iam::956022059432:role/aws-reserved/sso.amazonaws.com/eu-west-1/AWSReservedSSO_AWSAdministratorAccess_47f2bdf6c3eccf72",
    "arn:aws:iam::956022059432:role/Bastion-wer1-prod"
  ]
}
