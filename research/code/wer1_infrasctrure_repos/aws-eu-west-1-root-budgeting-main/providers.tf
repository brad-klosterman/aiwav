terraform {
  required_version = "1.5.6"
}

provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = local.tags
  }
}
