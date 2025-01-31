terraform {
  backend "local" {
    path = "./terraform.tfstate"
  }
}

locals {
  tags = {
    terraform   = true
    root        = "wer1-root/budgeting"
    project     = "wer1-root"
    environment = "root"
  }
}

module "monthly_current_budget" {
  source              = "app.terraform.io/lsdopen/eks-blueprint-budgeting/aws"
  version             = "1.7.0"
  budget_name         = "Monthly current spend for ${local.tags.environment}"
  budgeted_amount_usd = "1000"
  alert_emails        = ["billing-alerts@wer1.ai"]
  period              = "MONTHLY"
  type                = "ACTUAL"
}

module "monthly_forecasted_budget" {
  source              = "app.terraform.io/lsdopen/eks-blueprint-budgeting/aws"
  version             = "1.7.0"
  budget_name         = "Monthly forecasted spend for ${local.tags.environment}"
  budgeted_amount_usd = "1000"
  alert_emails        = ["billing-alerts@wer1.ai"]
  period              = "MONTHLY"
  type                = "FORECASTED"
}
