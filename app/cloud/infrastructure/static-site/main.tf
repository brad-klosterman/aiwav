terraform {
  required_providers {
    aws = {
      source                = "hashicorp/aws"
      version              = "~> 5.0"
      configuration_aliases = [aws.us_east_1]
    }
  }
}

# S3 buckets for web and mobile hosting
resource "aws_s3_bucket" "web" {
  bucket = "aiwav-web"
}

resource "aws_s3_bucket" "mobile" {
  bucket = "aiwav-mobile"
}

resource "aws_s3_bucket_public_access_block" "web" {
  bucket = aws_s3_bucket.web.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_public_access_block" "mobile" {
  bucket = aws_s3_bucket.mobile.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "web" {
  bucket = aws_s3_bucket.web.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_versioning" "mobile" {
  bucket = aws_s3_bucket.mobile.id
  versioning_configuration {
    status = "Enabled"
  }
}

# CloudFront OAC
resource "aws_cloudfront_origin_access_control" "web" {
  name                              = "aiwav-web-oac"
  description                       = "Origin Access Control for aiwav.space website"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_origin_access_control" "mobile" {
  name                              = "aiwav-mobile-oac"
  description                       = "Origin Access Control for mobile.aiwav.space"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# S3 bucket policies
resource "aws_s3_bucket_policy" "web" {
  bucket = aws_s3_bucket.web.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.web.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.web.arn
          }
        }
      }
    ]
  })
}

resource "aws_s3_bucket_policy" "mobile" {
  bucket = aws_s3_bucket.mobile.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.mobile.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.mobile.arn
          }
        }
      }
    ]
  })
}

# ACM Certificate
resource "aws_acm_certificate" "main" {
  provider                  = aws.us_east_1
  domain_name              = "aiwav.space"
  subject_alternative_names = ["*.aiwav.space"]
  validation_method        = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

# CloudFront distributions
resource "aws_cloudfront_distribution" "web" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["aiwav.space", "www.aiwav.space"]
  price_class         = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.web.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.web.bucket}"
    origin_access_control_id = aws_cloudfront_origin_access_control.web.id
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 300
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.web.bucket}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    cache_policy_id          = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf" # CORS-S3Origin
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}

resource "aws_cloudfront_distribution" "mobile" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["mobile.aiwav.space"]
  price_class         = "PriceClass_100"

  origin {
    domain_name              = aws_s3_bucket.mobile.bucket_regional_domain_name
    origin_id                = "S3-${aws_s3_bucket.mobile.bucket}"
    origin_access_control_id = aws_cloudfront_origin_access_control.mobile.id
  }

  custom_error_response {
    error_code            = 404
    response_code         = 200
    response_page_path    = "/index.html"
    error_caching_min_ttl = 300
  }

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "S3-${aws_s3_bucket.mobile.bucket}"
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    cache_policy_id          = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized
    origin_request_policy_id = "88a5eaf4-2fd4-4709-b370-b4c650ea3fcf" # CORS-S3Origin
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.main.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
} 