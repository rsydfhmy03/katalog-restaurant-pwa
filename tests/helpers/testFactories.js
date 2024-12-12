import LikeButtonPresenter from '../../src/scripts/utils/likebutton-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-db';
import PostReview from '../../src/scripts/utils/postreview-initiator';

document.body.innerHTML = `
  <div id="likeButtonContainer"></div>
  <div class="form-reviews-container">
    <div class="form-review">
      <form>
        <div class="form-group">
          <input name="inputName" type="text" id="inputName" />
          <textarea name="inputReview" id="inputReview"></textarea>
          <button id="submit-review" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div class="detail-review"></div>
  </div>
`;

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

const createPostReviewEnvironment = async () => {
  const mockReview = {
    id: 'restaurant-123',
    name: 'John Doe',
    review: 'Great food!',
  };

  document.getElementById('inputName').value = mockReview.name;
  document.getElementById('inputReview').value = mockReview.review;

  await PostReview();

  return mockReview;
};

export { createLikeButtonPresenterWithRestaurant, createPostReviewEnvironment };
