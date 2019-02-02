const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

let resultNew = 0
let resultOld = 0

When(/^GET number from request "([^"]*)"$/, async function (url) {
  let res = await got.get(url);
  resultOld = resultNew
  resultNew = parseInt(res.body.match(/\d+/)[0])
});

Then(/^Compare last two results$/, async function () {
  return assert.equal(resultOld+1, resultNew);
});