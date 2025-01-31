locals {
  environment = "prod"
  project     = "aiwav"
}

module "networking" {
  source = "./networking"
}

module "static_site" {
  source = "./static-site"
  providers = {
    aws.us_east_1 = aws.us_east_1
  }
  depends_on = [module.networking]
}

module "cicd" {
  source = "./cicd"
  depends_on = [module.static_site]

  website_bucket_arn          = module.static_site.website_bucket_arn
  website_bucket_id           = module.static_site.website_bucket_id
  cloudfront_distribution_id  = module.static_site.cloudfront_distribution_id
  cloudfront_distribution_arn = module.static_site.cloudfront_distribution_arn
} 