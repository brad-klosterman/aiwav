data "terraform_remote_state" "networking" {
  backend = "s3"
  config = {
    bucket         = local.remote_state_config.bucket
    key            = "${local.remote_state_config.base_key}/networking"
    region         = local.remote_state_config.region
    dynamodb_table = local.remote_state_config.dynamodb_table
    encrypt        = local.remote_state_config.encrypt
  }
}

data "terraform_remote_state" "cluster" {
  backend = "s3"
  config = {
    bucket         = local.remote_state_config.bucket
    key            = "${local.remote_state_config.base_key}/cluster"
    region         = local.remote_state_config.region
    dynamodb_table = local.remote_state_config.dynamodb_table
    encrypt        = local.remote_state_config.encrypt
  }
}