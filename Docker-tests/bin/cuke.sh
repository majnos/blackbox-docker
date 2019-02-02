#!/bin/sh
echo My public ip address is:
curl ifconfig.co
mkdir -p log
PARALLEL=${CUKE_SLAVES:-1}
./node_modules/.bin/cucumber-js -f json:log/cucumber-report.json -f node_modules/cucumber-pretty -r src/step_definitions -r src/support/world.js --parallel ${PARALLEL} $@
node src/html-reporter.js
