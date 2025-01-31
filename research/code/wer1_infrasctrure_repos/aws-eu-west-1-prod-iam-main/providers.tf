terraform {
  required_version = "1.8.3"

  required_providers {
    pgp = {
      source = "ekristen/pgp"
    }
  }
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}

provider "pgp" {}
