terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/networking"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/networking"
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

module "networking" {
  source              = "app.terraform.io/lsdopen/eks-blueprint-networking/aws"
  version             = "3.5.0"
  name                = "aws-eks-blueprint-wer1-prod"
  cluster_name        = "wer1-prod"
  cidr                = "10.1.0.0/16"
  pod_cidr            = "100.65.0.0/16"
  azs                 = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
  private_subnets     = ["10.1.0.0/24", "10.1.1.0/24", "10.1.2.0/24"]
  public_subnets      = ["10.1.128.0/24", "10.1.129.0/24", "10.1.130.0/24"]
  database_subnets    = ["10.1.136.0/24", "10.1.138.0/24", "10.1.139.0/24"]
  elasticache_subnets = ["10.1.144.0/24", "10.1.145.0/24", "10.1.146.0/24"]
  pod_subnets         = ["100.65.0.0/20", "100.65.16.0/20", "100.65.32.0/20"]
  managed_nat         = false
}
