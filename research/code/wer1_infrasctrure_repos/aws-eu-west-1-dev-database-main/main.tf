terraform {
  backend "s3" {
    bucket         = "wer1-976284867583-terraform-states"
    dynamodb_table = "wer1-976284867583-terraform-states-lock"
    key            = "wer1-dev/database"
    region         = "eu-west-1"
    encrypt        = true
  }
}
locals {
  tags = {
    terraform   = true
    root        = "wer1-dev/database"
    project     = "wer1-dev"
    environment = "dev"
  }
  remote_state_config = {
    bucket         = "wer1-976284867583-terraform-states"
    dynamodb_table = "wer1-976284867583-terraform-states-lock"
    base_key       = "wer1-dev"
    region         = "eu-west-1"
    encrypt        = true
  }
}

module "database" {
  source                     = "app.terraform.io/lsdopen/eks-blueprint-database/aws"
  version                    = "1.17.0"
  vpc_id                     = data.terraform_remote_state.networking.outputs.vpc_id
  allowed_cidr_blocks        = data.terraform_remote_state.networking.outputs.organisation_cidr_blocks
  database_subnet_group_name = data.terraform_remote_state.networking.outputs.database_subnet_group_name

  identifier     = "development"
  instance_class = "db.t4g.micro"

  engine               = "postgres"
  major_engine_version = "16"
  engine_version       = "16.4"
  family               = "postgres16"

  storage_type          = "gp3"
  allocated_storage     = 20
  max_allocated_storage = 30

  database_name     = "postgres"
  database_username = var.database_username
  database_password = var.database_password
  database_port     = 5432

  backup_window           = "03:00-03:59"         #5AM SAST
  maintenance_window      = "Sun:04:00-Sun:05:00" # 6AM SAST
  backup_retention_period = 3

  deletion_protection          = true
  performance_insights_enabled = true

  parameters = [
    {
      name         = "rds.force_ssl"
      value        = 1
      apply_method = "pending-reboot"
    }
  ]
}
