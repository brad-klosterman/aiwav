resource "postgresql_role" "graph" {
  name     = var.graph_database_username
  password = var.graph_database_password
  login    = true
}

resource "postgresql_database" "graph" {
  name              = var.graph_database_name
  owner             = postgresql_role.graph.name
  lc_collate        = "C"
  connection_limit  = -1
  allow_connections = true
}

resource "postgresql_extension" "uuid-ossp" {
  name = "uuid-ossp"
}

data "aws_iam_openid_connect_provider" "github_oidc" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_iam_policy_document" "ecr_github_action_assume_role" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    principals {
      type        = "Federated"
      identifiers = [data.aws_iam_openid_connect_provider.github_oidc.arn]
    }
    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:WeR1Hub/wer1-graph:*"]
    }
  }
}

resource "aws_iam_role" "ecr_github_action" {
  name               = "github-actions-wer1-graph-${local.tags.environment}"
  assume_role_policy = data.aws_iam_policy_document.ecr_github_action_assume_role.json
}

data "aws_iam_policy_document" "ecr_github_action" {
  statement {
    actions = [
      "ecr:BatchGetImage",
      "ecr:BatchCheckLayerAvailability",
      "ecr:CompleteLayerUpload",
      "ecr:GetDownloadUrlForLayer",
      "ecr:InitiateLayerUpload",
      "ecr:PutImage",
      "ecr:UploadLayerPart",
    ]
    resources = ["arn:aws:ecr:eu-west-1:${data.aws_caller_identity.this.id}:repository/graph"]
  }

  statement {
    actions = [
      "ecr:GetAuthorizationToken",
    ]
    resources = ["*"]
  }
}

resource "aws_iam_policy" "ecr_github_action" {
  name        = "github-actions-wer1-graph"
  description = "Grant Github Actions the ability to push to wer1-graph"
  policy      = data.aws_iam_policy_document.ecr_github_action.json
}

resource "aws_iam_role_policy_attachment" "ecr_github_action" {
  role       = aws_iam_role.ecr_github_action.name
  policy_arn = aws_iam_policy.ecr_github_action.arn
}
