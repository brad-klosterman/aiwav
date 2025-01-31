terraform {
  backend "s3" {
    bucket         = "wer1-008540501749-terraform-states"
    dynamodb_table = "wer1-008540501749-terraform-states-lock"
    key            = "wer1-prod-storage/event-storage"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod-storage/event-storage"
    project     = "wer1-prod-storage"
    environment = "prod-storage"
  }
  remote_state_config = {
    bucket         = "wer1-008540501749-terraform-states"
    dynamodb_table = "wer1-008540501749-terraform-states-lock"
    base_key       = "wer1-prod-storage"
    region         = "eu-west-1"
    encrypt        = true
  }
}

data "aws_caller_identity" "current" {}
