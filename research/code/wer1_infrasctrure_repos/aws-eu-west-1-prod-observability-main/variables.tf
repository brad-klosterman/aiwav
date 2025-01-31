variable "grafana_password" {
  description = "The admin password to set for Grafana."
  type        = string
  sensitive   = true
}

variable "alertmanager_discord_webhooks" {
  description = "Discord webhook urls to send Alertmanager alerts."
  type        = set(string)
  sensitive   = true
}

variable "sauron_client_id" {
  description = "Sauron client id "
  type        = string
  sensitive   = true
}

variable "sauron_client_secret" {
  description = "Sauron client secret"
  type        = string
  sensitive   = true
}
