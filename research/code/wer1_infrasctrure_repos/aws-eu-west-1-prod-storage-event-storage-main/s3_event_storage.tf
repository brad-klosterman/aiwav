module "event_storage_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.15.1"

  bucket                                   = "wer1-event-storage-${local.tags.environment}"
  object_ownership                         = "BucketOwnerEnforced"
  attach_deny_insecure_transport_policy    = true
  attach_require_latest_tls_policy         = true
  control_object_ownership                 = true
  expected_bucket_owner                    = data.aws_caller_identity.current.account_id

  server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm = "AES256"
      }
    }
  }

  lifecycle_rule = [
    {
      id      = "intelligent-tiering"
      enabled = true

      filter = {}

      transition = [{
        days          = 0
        storage_class = "INTELLIGENT_TIERING"
      }]
    }
  ]
}


resource "aws_iam_role" "rudderstack_s3_role" {
  name = "rudderstack_s3_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Principal = {
        AWS = "arn:aws:iam::422074288268:root"
      }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_policy" "rudderstack_s3_policy" {
  name        = "rudderstack_s3_policy"
  description = "Policy for RudderStack S3 access"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = [
        "s3:GetObject",
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:ListBucket",
      ]
      Resource = [
        "arn:aws:s3:::wer1-event-storage-${local.tags.environment}",
        "arn:aws:s3:::wer1-event-storage-${local.tags.environment}/*",
      ]
    }]
  })
}

resource "aws_iam_role_policy_attachment" "rudderstack_s3_attachment" {
  role       = aws_iam_role.rudderstack_s3_role.name
  policy_arn = aws_iam_policy.rudderstack_s3_policy.arn
}

output "iam_role_arn" {
  value = aws_iam_role.rudderstack_s3_role.arn
}
