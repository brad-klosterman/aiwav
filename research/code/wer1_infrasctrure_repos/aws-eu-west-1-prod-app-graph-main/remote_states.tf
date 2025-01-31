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

data "terraform_remote_state" "cluster_system" {
  backend = "s3"
  config = {
    bucket         = local.remote_state_config.bucket
    key            = "${local.remote_state_config.base_key}/cluster-system"
    region         = local.remote_state_config.region
    dynamodb_table = local.remote_state_config.dynamodb_table
    encrypt        = local.remote_state_config.encrypt
  }
}

data "terraform_remote_state" "database" {
  backend = "s3"
  config = {
    bucket         = local.remote_state_config.bucket
    key            = "${local.remote_state_config.base_key}/database"
    region         = local.remote_state_config.region
    dynamodb_table = local.remote_state_config.dynamodb_table
    encrypt        = local.remote_state_config.encrypt
  }
}
