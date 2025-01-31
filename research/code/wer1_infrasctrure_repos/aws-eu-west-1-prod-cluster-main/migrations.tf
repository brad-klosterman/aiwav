removed {
  from = module.cluster.module.self_managed_node_group

  lifecycle { destroy = false }
}
