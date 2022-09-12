const { Given, When, Then, setDefaultTimeout, AfterAll, BeforeAll } = require("@cucumber/cucumber");
const actions = require('../helpers');
const selectors = require('../selectors');
setDefaultTimeout(100 * 5 * 3000);

BeforeAll(async function () {
  await actions.initDriver();
  await actions.maximizeWindow();
});

AfterAll(async function () {
  await actions.quitDriver();
});

Given("I navigate to home page", async function () {
  await actions.getUrl(selectors.home_url);
  await actions.click(selectors.cgu_accept);
});

When("I fill {word} in the bar search", async function (word) {
  await actions.fillText(selectors.search_bar, word);
});

Then("I click on the search button", async function () {
  await actions.clickEnter(selectors.search_bar);
});

Then("I see the result label", async function () {
  await actions.waitToSeeElement(selectors.result_label)
});
