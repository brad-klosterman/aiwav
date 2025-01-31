
resource "aws_cloudwatch_event_rule" "daily_schedule_midnight" {
  name                = "daily-schedule-midnight"
  description         = "Triggers the Graph Trigger Lambda Distribution function every day at 00:00:00 (UTC+00:00)"
  schedule_expression = "cron(0 0 * * ? *)"
}

resource "aws_cloudwatch_event_rule" "daily_schedule_seven_am" {
  name                = "daily-schedule-seven-am"
  description         = "Triggers the Graph Trigger Lambda Earnings Notification function every day at 07:00:00 (UTC+00:00)"
  schedule_expression = "cron(0 7 * * ? *)"
}

resource "aws_cloudwatch_event_target" "lambda_target_distribution" {
  rule      = aws_cloudwatch_event_rule.daily_schedule_midnight.name
  arn  = module.graph_trigger_lambda_distribution.lambda_function_arn
}

resource "aws_cloudwatch_event_target" "lambda_target_earnings_notification" {
  rule      = aws_cloudwatch_event_rule.daily_schedule_seven_am.name
  arn  = module.graph_trigger_lambda_earnings_notification.lambda_function_arn
}

resource "aws_lambda_permission" "graph_trigger_lambda_distribution" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = module.graph_trigger_lambda_distribution.lambda_function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.daily_schedule_midnight.arn
}

resource "aws_lambda_permission" "graph_trigger_lambda_earnings_notification" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = module.graph_trigger_lambda_earnings_notification.lambda_function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.daily_schedule_seven_am.arn
}

module "graph_trigger_lambda_distribution" {
  source = "terraform-aws-modules/lambda/aws"

  function_name = "Graph-Trigger-Distribution-${local.tags.environment}"
  description   = "Lambda that trigger subscription distribution on the Graph"
  handler       = "index.handler"
  runtime       = "nodejs20.x"

  source_path = "${path.module}/graph-trigger-distribution"

  environment_variables = {
    DISTRIBUTION_SCHEDULER_KEY	= "2633f470-58d6-438b-b84c-8e277c673c2d"
    GRAPH_API_URL = "https://graph.public.prod.wer1.ai"
    STAGE         = local.tags.environment
  }
}

module "graph_trigger_lambda_earnings_notification" {
  source = "terraform-aws-modules/lambda/aws"

  function_name = "Graph-Trigger-Earnings-${local.tags.environment}"
  description   = "Lambda that triggers earnings notifications on the Graph"
  handler       = "index.handler"
  runtime       = "nodejs20.x"

  source_path = "${path.module}/graph-trigger-earnings-notification"

  environment_variables = {
    NOTIFICATION_API_KEY	= "52198bdd-bc67-4ba7-b20c-6b406e5c5d33"
    GRAPH_API_URL = "https://graph.public.prod.wer1.ai"
    STAGE         = local.tags.environment
  }
}
