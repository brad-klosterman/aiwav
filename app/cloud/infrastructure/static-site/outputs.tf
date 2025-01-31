output "website_bucket_arn" {
  description = "The ARN of the website S3 bucket"
  value       = aws_s3_bucket.website.arn
}

output "website_bucket_id" {
  description = "The ID of the website S3 bucket"
  value       = aws_s3_bucket.website.id
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.id
}

output "cloudfront_distribution_arn" {
  description = "The ARN of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website.arn
}

output "web_bucket_arn" {
  description = "The ARN of the web S3 bucket"
  value       = aws_s3_bucket.web.arn
}

output "web_bucket_id" {
  description = "The ID of the web S3 bucket"
  value       = aws_s3_bucket.web.id
}

output "web_cloudfront_distribution_id" {
  description = "The ID of the web CloudFront distribution"
  value       = aws_cloudfront_distribution.web.id
}

output "web_cloudfront_distribution_arn" {
  description = "The ARN of the web CloudFront distribution"
  value       = aws_cloudfront_distribution.web.arn
}

output "mobile_bucket_arn" {
  description = "The ARN of the mobile S3 bucket"
  value       = aws_s3_bucket.mobile.arn
}

output "mobile_bucket_id" {
  description = "The ID of the mobile S3 bucket"
  value       = aws_s3_bucket.mobile.id
}

output "mobile_cloudfront_distribution_id" {
  description = "The ID of the mobile CloudFront distribution"
  value       = aws_cloudfront_distribution.mobile.id
}

output "mobile_cloudfront_distribution_arn" {
  description = "The ARN of the mobile CloudFront distribution"
  value       = aws_cloudfront_distribution.mobile.arn
} 