output "iam_role_name" {
  description = "Name of the created role"
  value       = module.iam.iam_role_name
}

output "iam_role_arn" {
  description = "ARN of the created role"
  value       = module.iam.iam_role_arn
}
