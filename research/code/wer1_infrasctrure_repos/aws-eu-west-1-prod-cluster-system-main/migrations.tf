removed {
  from = module.cluster_system.aws_cloudwatch_event_rule.aws_node_events

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_cloudwatch_event_target.aws_node_events

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_iam_policy.aws_node_termination_handler

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_iam_policy.karpenter

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_sqs_queue.aws_node_events

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_sqs_queue_policy.aws_node_termination_handler

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.aws_ssm_parameter.monitoring_mixin_karpenter

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.helm_release.aws_node_termination_handler

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.helm_release.karpenter

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.helm_release.karpenter_crd

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.helm_release.karpenter_provisioner

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.module.aws_node_termination_handler_oidc_role

  lifecycle { destroy = false }
}

removed {
  from = module.cluster_system.module.karpenter_oidc_role

  lifecycle { destroy = false }
}
