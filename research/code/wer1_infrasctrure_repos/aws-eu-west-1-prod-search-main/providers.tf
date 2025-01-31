terraform {
  required_version = "1.8.3"
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}
