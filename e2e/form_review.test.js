/* eslint-disable no-undef */
Feature('Customer Review Feature');

Scenario('like a restaurant, go to detail, post a review and verify new review appears', async ({ I }) => {
  const timestamp = new Date().toISOString();
  const uniqueName = `User_${timestamp}`;
  const uniqueReview = `Great food testing at ${timestamp}`;

  I.amOnPage('/#/');
  I.seeElement('.list_item');

  const restaurantLink = locate('.list_item_title a').first();
  I.click(restaurantLink);

  I.seeElement('#inputName');

  I.fillField('#inputName', uniqueName);
  I.fillField('#inputReview', uniqueReview);
  I.click('#submit-review');

  const reviewContainer = '.detail-review';
  I.waitForElement(reviewContainer, 10);

  I.see(uniqueName, reviewContainer);
  I.see(uniqueReview, reviewContainer);
});
