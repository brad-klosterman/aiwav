terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/cache"
    region         = "eu-west-1"
    encrypt        = true
  }
}
locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/cache"
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

module "cache" {
  source                     = "app.terraform.io/lsdopen/eks-blueprint-cache/aws"
  version                    = "2.8.0"
  identifier                 = local.tags.environment
  vpc_id                     = data.terraform_remote_state.networking.outputs.vpc_id
  subnet_group_name          = data.terraform_remote_state.networking.outputs.elasticache_subnet_group_name
  allowed_cidr_blocks        = data.terraform_remote_state.networking.outputs.organisation_cidr_blocks
  node_type                  = "cache.t4g.micro"
  engine_version             = "7.1"
  parameter_group_name       = "default.redis7"
  parameter_group_family     = "redis7"
  automatic_failover_enabled = false # False to scale down
  password                   = var.password
  multi_az_enabled           = false # False to scale down
  transit_encryption_enabled = true
  maintenance_window         = "Sun:04:00-Sun:05:00" # 6AM SAST
}
