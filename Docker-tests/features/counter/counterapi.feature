Feature: API Testing Counter
  Call API and get increment
  @api
  Scenario: Counter increments
      When GET number from request "http://127.0.0.1:5001/clients"
      When GET number from request "http://127.0.0.1:5001/clients"
      Then Compare last two results

