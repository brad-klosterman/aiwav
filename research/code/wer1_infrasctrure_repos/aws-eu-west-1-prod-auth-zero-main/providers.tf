terraform {
  required_version = "1.8.3"
  required_providers {
    auth0 = {
      source  = "auth0/auth0"
      version = "1.2.0"
    }
  }
}

provider "auth0" {
  debug  = true
  domain = var.domain
}
