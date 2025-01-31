variable "website_bucket_arn" {
  description = "The ARN of the website S3 bucket"
  type        = string
}

variable "website_bucket_id" {
  description = "The ID of the website S3 bucket"
  type        = string
}

variable "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution"
  type        = string
}

variable "cloudfront_distribution_arn" {
  description = "The ARN of the CloudFront distribution"
  type        = string
}

# S3 bucket for artifacts
resource "aws_s3_bucket" "artifacts" {
  bucket = "aiwav-pipeline-artifacts"
}

resource "aws_s3_bucket_versioning" "artifacts" {
  bucket = aws_s3_bucket.artifacts.id
  versioning_configuration {
    status = "Enabled"
  }
}

# CodeBuild project
resource "aws_codebuild_project" "website" {
  name          = "aiwav-website-build"
  description   = "Build React application for aiwav.space"
  build_timeout = "15"
  service_role  = aws_iam_role.codebuild.arn

  artifacts {
    type = "CODEPIPELINE"
  }

  environment {
    compute_type                = "BUILD_GENERAL1_SMALL"
    image                       = "aws/codebuild/amazonlinux2-x86_64-standard:4.0"
    type                       = "LINUX_CONTAINER"
    image_pull_credentials_type = "CODEBUILD"

    environment_variable {
      name  = "NODE_ENV"
      value = "production"
    }

    environment_variable {
      name  = "CLOUDFRONT_DISTRIBUTION_ID"
      value = var.cloudfront_distribution_id
    }
  }

  source {
    type      = "CODEPIPELINE"
    buildspec = "buildspec.yml"
  }
}

# CodePipeline
resource "aws_codepipeline" "website" {
  name     = "aiwav-website-pipeline"
  role_arn = aws_iam_role.codepipeline.arn

  artifact_store {
    location = aws_s3_bucket.artifacts.bucket
    type     = "S3"
  }

  stage {
    name = "Source"

    action {
      name             = "Source"
      category         = "Source"
      owner            = "AWS"
      provider         = "CodeStarSourceConnection"
      version          = "1"
      output_artifacts = ["source_output"]

      configuration = {
        ConnectionArn    = aws_codestarconnections_connection.github.arn
        FullRepositoryId = "brad-klosterman/aiwav"
        BranchName       = "main"
      }
    }
  }

  stage {
    name = "Build"

    action {
      name            = "Build"
      category        = "Build"
      owner           = "AWS"
      provider        = "CodeBuild"
      input_artifacts = ["source_output"]
      version         = "1"

      configuration = {
        ProjectName = aws_codebuild_project.website.name
      }
    }
  }
}

# GitHub connection
resource "aws_codestarconnections_connection" "github" {
  name          = "aiwav-github"
  provider_type = "GitHub"
}

# IAM roles and policies
resource "aws_iam_role" "codebuild" {
  name = "aiwav-codebuild-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "codebuild.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "codebuild" {
  role = aws_iam_role.codebuild.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Resource = [
          aws_s3_bucket.artifacts.arn,
          "${aws_s3_bucket.artifacts.arn}/*",
          var.website_bucket_arn,
          "${var.website_bucket_arn}/*"
        ]
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:GetBucketAcl",
          "s3:GetBucketLocation"
        ]
      },
      {
        Effect = "Allow"
        Resource = [
          "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/codebuild/${aws_codebuild_project.website.name}",
          "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/codebuild/${aws_codebuild_project.website.name}:*"
        ]
        Action = [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
      },
      {
        Effect = "Allow"
        Resource = [
          var.cloudfront_distribution_arn
        ]
        Action = [
          "cloudfront:CreateInvalidation"
        ]
      }
    ]
  })
}

resource "aws_iam_role" "codepipeline" {
  name = "aiwav-codepipeline-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "codepipeline.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy" "codepipeline" {
  role = aws_iam_role.codepipeline.name

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Resource = [
          aws_s3_bucket.artifacts.arn,
          "${aws_s3_bucket.artifacts.arn}/*"
        ]
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:GetObjectVersion",
          "s3:GetBucketVersioning"
        ]
      },
      {
        Effect = "Allow"
        Resource = "*"
        Action = [
          "codestar-connections:UseConnection"
        ]
      },
      {
        Effect = "Allow"
        Resource = aws_codebuild_project.website.arn
        Action = [
          "codebuild:BatchGetBuilds",
          "codebuild:StartBuild"
        ]
      }
    ]
  })
}

# Data sources
data "aws_caller_identity" "current" {}
data "aws_region" "current" {} 