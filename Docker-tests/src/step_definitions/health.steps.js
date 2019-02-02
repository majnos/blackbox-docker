const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

let result 

When(/^GET health from request "([^"]*)"$/, async function (url) {
  let res = await got.get(url);
  result = JSON.parse(res.body)
});

Then(/^is healthy$/, function () {
  assert.equal(result.healthy, true);
});