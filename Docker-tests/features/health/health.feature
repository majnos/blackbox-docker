Feature: Verify Health
  Call API and verify health
  @api
  Scenario: Health status
      When GET health from request "http://127.0.0.1:5001/"
      Then is healthy

