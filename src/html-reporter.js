var reporter = require('cucumber-html-reporter')

reporter.generate({
  theme: 'foundation',
  jsonFile: 'log/cucumber-report.json',
  output: 'log/cucumber-report.html',
  name: '🥒 👯‍♂️',
  brandTitle: 'integration tests'
})
