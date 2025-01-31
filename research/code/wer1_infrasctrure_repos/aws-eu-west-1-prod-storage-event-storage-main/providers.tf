terraform {
  required_version = "1.5.7"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.8"
    }
  }
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}
