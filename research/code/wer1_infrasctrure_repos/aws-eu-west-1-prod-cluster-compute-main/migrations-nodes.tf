################################### default node group

################################### find these on the aws console
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_autoscaling_group.this[0]
  id = "Worker-${local.migration_cluster_name}-default-20231026082956384400000014"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_launch_template.this[0]
  id = "lt-04ffd4b7e4a37ab2d"
}
################################### static just change the names of the to and id for the name of the node group
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_eks_access_entry.this[0]
  id = "${local.migration_cluster_name}:arn:aws:iam::${local.migration_aws_account_id}:role/Worker-${local.migration_cluster_name}-default"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_instance_profile.this[0]
  id = "Worker-${local.migration_cluster_name}-default"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_role_policy_attachment.additional["ssm"]
  id = "Worker-${local.migration_cluster_name}-default/arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_role_policy_attachment.this["AmazonEC2ContainerRegistryReadOnly"]
  id = "Worker-${local.migration_cluster_name}-default/arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_role_policy_attachment.this["AmazonEKS_CNI_Policy"]
  id = "Worker-${local.migration_cluster_name}-default/arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_role_policy_attachment.this["AmazonEKSWorkerNodePolicy"]
  id = "Worker-${local.migration_cluster_name}-default/arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["default"].aws_iam_role.this[0]
  id = "Worker-${local.migration_cluster_name}-default"
}
################################### end of node group


################################### scale node group

################################### find these on the aws console and change the names of the to and id for the name of the node group
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_autoscaling_group.this[0]
  id = "Worker-${local.migration_cluster_name}-scale-20231026082956384400000015"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_launch_template.this[0]
  id = "lt-0a13174c391bf1b76"
}
################################### static just change the names of the to and id for the name of the node group

import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_eks_access_entry.this[0]
  id = "${local.migration_cluster_name}:arn:aws:iam::${local.migration_aws_account_id}:role/Worker-${local.migration_cluster_name}-scale"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_instance_profile.this[0]
  id = "Worker-${local.migration_cluster_name}-scale"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_role_policy_attachment.additional["ssm"]
  id = "Worker-${local.migration_cluster_name}-scale/arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_role_policy_attachment.this["AmazonEC2ContainerRegistryReadOnly"]
  id = "Worker-${local.migration_cluster_name}-scale/arn:aws:iam::aws:policy/AmazonEC2ContainerRegistryReadOnly"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_role_policy_attachment.this["AmazonEKS_CNI_Policy"]
  id = "Worker-${local.migration_cluster_name}-scale/arn:aws:iam::aws:policy/AmazonEKS_CNI_Policy"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_role_policy_attachment.this["AmazonEKSWorkerNodePolicy"]
  id = "Worker-${local.migration_cluster_name}-scale/arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}
import {
  to = module.cluster_compute.module.self_managed_node_group["scale"].aws_iam_role.this[0]
  id = "Worker-${local.migration_cluster_name}-scale"
}

################################### for scaling machines

import {
  to = module.cluster_compute.helm_release.karpenter_provisioner["scale"]
  id = "cluster-system/karpenter-provisioner-scale"
}

################################### end of node group
