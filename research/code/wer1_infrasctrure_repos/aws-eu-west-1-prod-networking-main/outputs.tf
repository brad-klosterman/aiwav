output "vpc_id" {
  description = "The ID of the VPC"
  value       = module.networking.vpc_id
}

output "vpc_cidr_block" {
  description = "The CIDR block of the VPC"
  value       = module.networking.vpc_cidr_block
}

output "pod_cidr_block" {
  description = "The POD CIDR block of the VPC"
  value       = module.networking.pod_cidr_block
}

output "organisation_cidr_blocks" {
  description = "List of CIDR blocks to expose for full organisation VPN access"
  value       = module.networking.organisation_cidr_blocks
}

output "private_subnets" {
  description = "List of IDs of private subnets"
  value       = module.networking.private_subnets
}

output "private_subnets_cidr_blocks" {
  description = "List of cidr_blocks of private subnets"
  value       = module.networking.private_subnets_cidr_blocks
}

output "public_subnets" {
  description = "List of IDs of public subnets"
  value       = module.networking.public_subnets
}

output "default_security_group_id" {
  description = "The ID of the security group created by default on VPC creation"
  value       = module.networking.default_security_group_id
}

output "pod_subnets" {
  description = "List of IDs of pod subnets"
  value       = module.networking.pod_subnets
}

output "pod_subnet_cidr_blocks" {
  description = "List of CIDR blocks of pod subnets"
  value       = module.networking.pod_subnet_cidr_blocks
}

output "azs" {
  description = "A list of availability zones specified as argument to this module"
  value       = module.networking.azs
}

output "cluster_name" {
  description = "Name of the EKS cluster"
  value       = module.networking.cluster_name
}

output "database_subnet_group_name" {
  description = "Name of database subnet group"
  value       = module.networking.database_subnet_group_name
}

output "elasticache_subnet_group_name" {
  description = "Name of database subnet group"
  value       = module.networking.elasticache_subnet_group_name
}
