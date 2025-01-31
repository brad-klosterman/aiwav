data "terraform_remote_state" "iam" {
  backend = "s3"
  config = {
    bucket         = local.remote_state_config.bucket
    key            = "${local.remote_state_config.base_key}/iam"
    region         = local.remote_state_config.region
    dynamodb_table = local.remote_state_config.dynamodb_table
    encrypt        = local.remote_state_config.encrypt
  }
}
