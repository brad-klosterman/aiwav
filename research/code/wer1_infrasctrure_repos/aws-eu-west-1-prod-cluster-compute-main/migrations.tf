##### Fill these in
locals {
  migration_cluster_name   = "wer1-prod"
  migration_aws_account_id = "956022059432"
}

###### For these ones, go to IAM policies, toggle the columns to show Attached entities and use that to figure it out.

import {
  to = module.cluster_compute.module.aws_node_termination_handler_oidc_role[0].aws_iam_role_policy_attachment.custom[0]
  id = "AWSNTH-${local.migration_cluster_name}/arn:aws:iam::${local.migration_aws_account_id}:policy/terraform-20231109130720122100000005"
}

import {
  to = module.cluster_compute.aws_iam_policy.aws_node_termination_handler[0]
  id = "arn:aws:iam::${local.migration_aws_account_id}:policy/terraform-20231109130720122100000005"
}

import {
  to = module.cluster_compute.module.karpenter_oidc_role[0].aws_iam_role_policy_attachment.custom[0]
  id = "Karpenter-${local.migration_cluster_name}/arn:aws:iam::${local.migration_aws_account_id}:policy/terraform-2023110913074498110000000a"
}

import {
  to = module.cluster_compute.aws_iam_policy.karpenter[0]
  id = "arn:aws:iam::${local.migration_aws_account_id}:policy/terraform-2023110913074498110000000a"
}

##### Leave the rest

import {
  to = module.cluster_compute.aws_cloudwatch_event_rule.aws_node_events["asg_termination"]
  id = "aws-nth-asg_termination-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_rule.aws_node_events["instance_state_change"]
  id = "aws-nth-instance_state_change-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_rule.aws_node_events["scheduled_change"]
  id = "aws-nth-scheduled_change-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_rule.aws_node_events["spot_termination"]
  id = "aws-nth-spot_termination-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_target.aws_node_events["asg_termination"]
  id = "aws-nth-asg_termination-${local.migration_cluster_name}/aws-node-events-asg_termination-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_target.aws_node_events["instance_state_change"]
  id = "aws-nth-instance_state_change-${local.migration_cluster_name}/aws-node-events-instance_state_change-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_target.aws_node_events["scheduled_change"]
  id = "aws-nth-scheduled_change-${local.migration_cluster_name}/aws-node-events-scheduled_change-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_cloudwatch_event_target.aws_node_events["spot_termination"]
  id = "aws-nth-spot_termination-${local.migration_cluster_name}/aws-node-events-spot_termination-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_sqs_queue.aws_node_events[0]
  id = "https://sqs.eu-west-1.amazonaws.com/${local.migration_aws_account_id}/aws-node-queue-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_sqs_queue_policy.aws_node_termination_handler[0]
  id = "https://sqs.eu-west-1.amazonaws.com/${local.migration_aws_account_id}/aws-node-queue-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.aws_ssm_parameter.monitoring_mixin_karpenter[0]
  id = "/eks-blueprint/${local.migration_cluster_name}/monitoring-mixin/karpenter"
}

import {
  to = module.cluster_compute.helm_release.aws_node_termination_handler[0]
  id = "cluster-system/aws-node-termination-handler"
}

import {
  to = module.cluster_compute.helm_release.karpenter[0]
  id = "cluster-system/karpenter"
}

import {
  to = module.cluster_compute.helm_release.karpenter_crd[0]
  id = "cluster-system/karpenter-crd"
}

import {
  to = module.cluster_compute.module.aws_node_termination_handler_oidc_role[0].aws_iam_role.this[0]
  id = "AWSNTH-${local.migration_cluster_name}"
}

import {
  to = module.cluster_compute.module.karpenter_oidc_role[0].aws_iam_role.this[0]
  id = "Karpenter-${local.migration_cluster_name}"
}
