terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/governance"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/governance"
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

module "governance" {
  source    = "app.terraform.io/lsdopen/eks-blueprint-governance/aws"
  version   = "1.6.0"
  inspector = false
  guardduty = false
  #  guardduty_features = [
  #    "S3_DATA_EVENTS",
  #    "EKS_AUDIT_LOGS",
  #    "EBS_MALWARE_PROTECTION",
  #    "RDS_LOGIN_EVENTS",
  #    "EKS_RUNTIME_MONITORING",
  #    "LAMBDA_NETWORK_LOGS"
  #  ]
  sns_alert_emails = ["tech-admin@wer1.ai"]
}
