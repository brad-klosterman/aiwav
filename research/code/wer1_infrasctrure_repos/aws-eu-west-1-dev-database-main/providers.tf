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
