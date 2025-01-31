terraform {
  required_version = "1.8.3"
}

provider "aws" {
  region = local.remote_state_config.region

  default_tags {
    tags = local.tags
  }
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.cluster.cluster_name
}

provider "kubernetes" {
  host                   = module.cluster.cluster_endpoint
  cluster_ca_certificate = base64decode(module.cluster.cluster_certificate_authority_data)
  token                  = data.aws_eks_cluster_auth.cluster.token
}

provider "helm" {
  kubernetes {
    host                   = module.cluster.cluster_endpoint
    cluster_ca_certificate = base64decode(module.cluster.cluster_certificate_authority_data)
    token                  = data.aws_eks_cluster_auth.cluster.token
  }
}
