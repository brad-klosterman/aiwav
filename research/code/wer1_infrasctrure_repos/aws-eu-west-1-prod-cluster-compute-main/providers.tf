terraform {
  required_version = "1.8.3"
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}

provider "aws" {
  alias  = "virginia"
  region = "us-east-1"

  default_tags {
    tags = local.tags
  }
}

data "aws_eks_cluster_auth" "cluster" {
  name = data.terraform_remote_state.cluster.outputs.cluster_name
}

data "aws_ecrpublic_authorization_token" "this" {
  provider = aws.virginia
}

provider "kubernetes" {
  host                   = data.terraform_remote_state.cluster.outputs.cluster_endpoint
  cluster_ca_certificate = base64decode(data.terraform_remote_state.cluster.outputs.cluster_certificate_authority_data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}

provider "helm" {
  kubernetes {
    host                   = data.terraform_remote_state.cluster.outputs.cluster_endpoint
    cluster_ca_certificate = base64decode(data.terraform_remote_state.cluster.outputs.cluster_certificate_authority_data)
    token                  = data.aws_eks_cluster_auth.cluster.token
  }

  registry {
    url      = "oci://public.ecr.aws/karpenter"
    username = data.aws_ecrpublic_authorization_token.this.user_name
    password = data.aws_ecrpublic_authorization_token.this.password
  }
}
