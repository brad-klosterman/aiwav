output "ingress" {
  description = "Details about the created ingress resources."
  value       = module.cluster_system.ingress
}
