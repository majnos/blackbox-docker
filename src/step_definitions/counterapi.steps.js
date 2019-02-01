const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

let firstReadout = 0
let secondReadout = 0

//// Your Step Definitions /////
// When(/^send PUT request to "([^"]*)", the data is$/, async function (url, docString) {
//   var data = {
//     headers: { 'Content-Type': 'application/json' },
//     json: true,
//     body: JSON.parse(docString)
//   };
//   await got.put(url, data);
// });

When(/^GET first number from request to "([^"]*)"$/, async function (url) {
  let res = await got.get(url);
  let json = JSON.parse(res.body);
  // let firstReadout = json.body.toString().
  return assert.equal(json.status, '200');
});
