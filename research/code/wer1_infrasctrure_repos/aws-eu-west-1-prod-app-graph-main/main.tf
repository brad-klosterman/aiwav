terraform {
  backend "s3" {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    key            = "wer1-prod/app-graph"
    region         = "eu-west-1"
    encrypt        = true
  }
}


locals {
  tags = {
    terraform   = true
    root        = "wer1-prod/app-graph"
    project     = "wer1-prod"
    environment = "prod"
  }
  remote_state_config = {
    bucket         = "wer1-956022059432-terraform-states"
    dynamodb_table = "wer1-956022059432-terraform-states-lock"
    base_key       = "wer1-prod"
    region         = "eu-west-1"
    encrypt        = true
  }
}

# Create IAM user with an access key and secret for S3 pre-signed URLs
resource "aws_iam_user" "graph" {
  name = "graph-file-uploader-${local.tags.environment}"
  path = "/system/"
}

resource "aws_iam_access_key" "graph" {
  user = aws_iam_user.graph.name
}

resource "aws_iam_policy" "s3_access" {
  name        = "graph_file_uploader_${local.tags.environment}"
  path        = "/"
  description = "IAM policy for s3 access from graph ${local.tags.environment}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:PutObject",
        "s3:PutObjectTagging",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts"
      ],
      "Resource": [
        "arn:aws:s3:::wer1-media-assets-${local.tags.environment}-storage/*",
        "arn:aws:s3:::wer1-media-uploads-${local.tags.environment}-storage/*"
      ],
      "Effect": "Allow"
    }
  ]
}
EOF
}

# Add some permissions and policies around our app being able to work with our s3 bucket
resource "aws_iam_user_policy_attachment" "s3_access" {
  user       = aws_iam_user.graph.name
  policy_arn = aws_iam_policy.s3_access.arn
}
