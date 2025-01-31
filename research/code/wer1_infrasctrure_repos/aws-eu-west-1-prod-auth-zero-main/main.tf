terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/auth-zero"
    region         = "eu-west-1"
    encrypt        = true
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/auth-zero"
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

resource "auth0_tenant" "wer1" {
  friendly_name           = "WeR1-${local.tags.environment}"
  support_email           = "support+prod@wer1.ai"
  allowed_logout_urls     = ["https://prod.private.wer1.ai/logout"]
  session_lifetime        = 8760
  idle_session_lifetime   = 72
  sandbox_version         = "18"
  enabled_locales         = ["en"]
  default_redirection_uri = "https://prod.private.wer1.ai/login"

  flags {
    disable_clickjack_protection_headers   = true
    enable_public_signup_user_exists_error = true
    use_scope_descriptions_for_consent     = true
    no_disclose_enterprise_connections     = false
    disable_management_api_sms_obfuscation = false
    disable_fields_map_fix                 = false
  }

  session_cookie {
    mode = "non-persistent"
  }

  sessions {
    oidc_logout_prompt_enabled = false
  }
}

resource "auth0_email_provider" "smtp_email_provider" {
  name                 = "smtp"
  enabled              = true
  default_from_address = var.default_from_address

  credentials {
    smtp_host = var.smtp_host
    smtp_port = 587
    smtp_user = var.smtp_user
    smtp_pass = var.smtp_pass
  }
}

resource "auth0_resource_server" "resource_server" {
  identifier                                      = "https://graph.public.prod.wer1.ai/"
  name                                            = "graph"
  allow_offline_access                            = true
  enforce_policies                                = false
  signing_alg                                     = "RS256"
  skip_consent_for_verifiable_first_party_clients = true
  token_dialect                                   = "access_token"
  token_lifetime                                  = 86400
  token_lifetime_for_web                          = 7200
}

resource "auth0_client" "retool" {
  name            = "Retool"
  description     = "Retool Created Through Terraform"
  app_type        = "non_interactive"
  oidc_conformant = true

  jwt_configuration {
    alg = "RS256"
  }
}
