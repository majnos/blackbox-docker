Feature: API Testing Counter
  Call API and get increment
  @api
  Scenario: Change user name
      When send GET request to "http://127.0.0.1:5001/clients"
