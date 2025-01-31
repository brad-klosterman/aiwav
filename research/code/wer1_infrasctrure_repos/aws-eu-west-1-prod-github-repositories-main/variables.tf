variable "token_app_terraform_io" {
  description = "App token for the terraform registry."
  type        = string
  sensitive   = true
}

variable "tailscale_client_id" {
  description = "Your Tailscale OAuth Client ID."
  type        = string
  sensitive   = true
}

variable "tailscale_secret" {
  description = "Your Tailscale OAuth Client Secret."
  type        = string
  sensitive   = true
}

variable "tailscale_tags" {
  description = "Comma separated list of Tags to be applied to nodes. The OAuth client must have permission to apply these tags."
  type        = string
  sensitive   = true
}
