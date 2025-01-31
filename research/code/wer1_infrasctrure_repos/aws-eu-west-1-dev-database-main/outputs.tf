output "database_address" {
  description = "The hostname of the database instance"
  value       = module.database.database_address
}

output "database_port" {
  description = "The port of the database instance"
  value       = module.database.database_port
}

output "database_username" {
  description = "The username of the database instance"
  value       = module.database.database_username
  sensitive   = true
}

output "database_password" {
  description = "The password of the database instance"
  value       = module.database.database_password
  sensitive   = true
}

output "database_name" {
  description = "The name of the database default schema"
  value       = module.database.database_name
  sensitive   = true
}

output "database_ca_data" {
  description = "Formatted and nudged CA data for use in applications that need to trust the CA."
  value       = module.database.database_ca_data
}
