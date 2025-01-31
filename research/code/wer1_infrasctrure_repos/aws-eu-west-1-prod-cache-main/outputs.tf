output "configuration_endpoint_address" {
  description = "The configuration endpoint address to allow host discovery."
  value       = module.cache.configuration_endpoint_address
}

output "primary_endpoint_address" {
  description = "The endpoint of the primary node in this node group (shard)."
  value       = module.cache.primary_endpoint_address
}

output "reader_endpoint_address" {
  description = "The endpoint of the reader node in this node group (shard)."
  value       = module.cache.reader_endpoint_address
}

output "username" {
  description = "The Redis AUTH username."
  value       = module.cache.username
  sensitive   = true
}

output "password" {
  description = "The Redis AUTH password."
  value       = module.cache.password
  sensitive   = true
}
