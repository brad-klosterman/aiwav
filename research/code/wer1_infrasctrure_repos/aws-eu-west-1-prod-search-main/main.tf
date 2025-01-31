terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/search"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/search"
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

resource "aws_iam_service_linked_role" "opensearchservice" {
  aws_service_name = "opensearchservice.amazonaws.com"
}

resource "aws_opensearch_domain" "search" {
  domain_name    = "wer1-${local.tags.environment}"
  engine_version = "OpenSearch_2.9"

  vpc_options {
    # This is configured on a single AZ to save costs
    subnet_ids = [data.terraform_remote_state.networking.outputs.private_subnets[0]]
  }

  cluster_config {
    dedicated_master_enabled = false
    instance_type            = "t3.small.search"
    # This is configured on a single AZ to save costs
    instance_count = 1

    # This is configured on a single AZ to save costs
    zone_awareness_enabled = false
  }

  ebs_options {
    ebs_enabled = true
    volume_size = 50
    volume_type = "gp3"
  }
  encrypt_at_rest {
    enabled = true
  }
  node_to_node_encryption {
    enabled = true
  }

  depends_on = [
    aws_iam_service_linked_role.opensearchservice
  ]
}
