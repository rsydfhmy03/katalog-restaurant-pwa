import CONFIG from "../../globals/config";

const createRestaurantItemTemplate = (restaurant) => `
  <div class="list_item">
    <img class="list_item_thumb" loading="lazy" src="${
      CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId
    }" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="city">${restaurant.city}</div>
    <div class="list_item_content">
      <p class="list_item_rating">
        Rating : 
        <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
      </p>
      <h1 class="list_item_title">
        <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
      </h1>
      <div class="list_item_desc">
        ${restaurant.description.slice(0, 150)}...
      </div>
    </div>
  </div>
`;

export default createRestaurantItemTemplate;
