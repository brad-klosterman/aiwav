terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/observability"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/observability"
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

module "observability" {
  source              = "app.terraform.io/lsdopen/eks-blueprint-observability/aws"
  version             = "4.24.1"
  cluster_name        = data.terraform_remote_state.cluster.outputs.cluster_name
  base_url            = data.terraform_remote_state.cluster_system.outputs.ingress["nginx-private"].base_url
  cluster_issuer_name = data.terraform_remote_state.cluster_system.outputs.ingress["nginx-private"].cluster_issuer_name
  ingress_class_name  = data.terraform_remote_state.cluster_system.outputs.ingress["nginx-private"].ingress_class_name
  storage_class_name  = "ebs-gp3-ephemeral"

  metrics_server = true

  kube_prometheus_stack         = true
  grafana_password              = var.grafana_password
  alertmanager_discord_webhooks = var.alertmanager_discord_webhooks
  prometheus_blackbox_exporter  = false
  prometheus_storage_size       = 20

  loki = true

  logging_operator                     = true
  logging_operator_buffer_storage_size = 2
  logging_operator_cluster_flows       = local.logging_operator_cluster_flows

  sauron               = true
  sauron_client_id     = var.sauron_client_id
  sauron_client_secret = var.sauron_client_secret

  default_replica_count = 1
}

locals {
  logging_operator_cluster_flows = []
}
