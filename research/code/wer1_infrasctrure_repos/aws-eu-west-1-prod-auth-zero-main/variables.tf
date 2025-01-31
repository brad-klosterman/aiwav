variable "domain" {
  type      = string
  sensitive = true
}

variable "smtp_host" {
  type      = string
  sensitive = true
}

variable "smtp_user" {
  type      = string
  sensitive = true
}

variable "smtp_pass" {
  type      = string
  sensitive = true
}

variable "default_from_address" {
  type      = string
  sensitive = true
}
