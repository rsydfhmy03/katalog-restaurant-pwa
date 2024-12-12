import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/templates-creators';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      console.log('Restaurant exists in favorites, rendering unlike button'); // Debug log
      this._renderUnlike();
    } else {
      console.log('Restaurant does not exist in favorites, rendering like button'); // Debug log
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    console.log('Checked restaurant existence:', restaurant); // Debug log
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      console.log('Liked restaurant, now rendering unlike button'); // Debug log
      this._renderButton();
    });
  },

  _renderUnlike() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();
    const unlikeButton = document.querySelector('#likeButton');
    unlikeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      console.log('Unliked restaurant, now rendering like button'); // Debug log
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
