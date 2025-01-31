terraform {
  required_version = "1.8.3"

  required_providers {
    github = {
      source = "integrations/github"
    }
  }
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}

provider "github" {
  owner = "wer1hub"
}
