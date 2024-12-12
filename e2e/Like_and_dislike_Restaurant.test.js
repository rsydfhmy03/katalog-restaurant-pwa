/* eslint-disable no-undef */
Feature('Liking and Unliking Restaurant');

Scenario('like and unlike a restaurant in one flow', async ({ I }) => {

  I.amOnPage('/#/');
  I.seeElement('.list_item');
  const restaurantLink = locate('.list_item_title a').first();
  I.click(restaurantLink);

  I.seeElement('#likeButton');
  const likeButtonClassBefore = await I.grabAttributeFrom('#likeButton', 'class');
  console.log('Class before clicking like:', likeButtonClassBefore);
  I.click('#likeButton');


  const likeButtonClassAfterLike = await I.grabAttributeFrom('#likeButton', 'class');
  console.log('Class after clicking like:', likeButtonClassAfterLike);
  I.seeAttributesOnElements('#likeButton', { class: 'unlike' });


  I.click('#likeButton');


  const likeButtonClassAfterUnlike = await I.grabAttributeFrom('#likeButton', 'class');
  console.log('Class after clicking unlike:', likeButtonClassAfterUnlike);
  I.seeAttributesOnElements('#likeButton', { class: 'like' });
});
