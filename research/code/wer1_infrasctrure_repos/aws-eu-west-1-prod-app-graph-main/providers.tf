terraform {
  required_version = "1.8.3"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.8"
    }
    postgresql = {
      source  = "cyrilgdn/postgresql"
      version = ">= 1.22.0"
    }
  }
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}

data "aws_eks_cluster_auth" "cluster" {
  name = data.terraform_remote_state.cluster.outputs.cluster_name
}

provider "kubernetes" {
  host                   = data.terraform_remote_state.cluster.outputs.cluster_endpoint
  cluster_ca_certificate = base64decode(data.terraform_remote_state.cluster.outputs.cluster_certificate_authority_data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}

provider "postgresql" {
  host            = data.terraform_remote_state.database.outputs.database_address
  port            = data.terraform_remote_state.database.outputs.database_port
  database        = data.terraform_remote_state.database.outputs.database_name
  username        = data.terraform_remote_state.database.outputs.database_username
  password        = data.terraform_remote_state.database.outputs.database_password
  sslmode         = "require"
  superuser       = false
  connect_timeout = 15
  expected_version = 16.4
}

