output "opensearch_endpoint" {
  value = aws_opensearch_domain.search.endpoint
}

output "opensearch_dashboard_endpoint" {
  value = aws_opensearch_domain.search.dashboard_endpoint
}
