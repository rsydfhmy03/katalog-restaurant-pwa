import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/templates-creators';
import LikeButtonPresenter from '../../utils/likebutton-presenter';
import PostReview from '../../utils/postreview-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-db';

const Detail = {
  async render() {
    return `
      <div class="main">
      <div class="latest">
        <h2 tabindex="0" class="explore-restaurant__label">Detail Restaurant</h2>
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-reviews-container">
          <div class="form-review">
            <form>
              <div class="form-group">
                <label for="inputName" class="form-label">Name</label>
                <input name="inputName" type="text" class="form-control" id="inputName" placeholder="Enter your name" required />
              </div>
              <div class="form-group">
                <label for="inputReview" class="form-label">Review</label>
                <textarea
                  name="inputReview"
                  id="inputReview"
                  class="form-control"
                  placeholder="Write your review here"
                  required
                ></textarea>
              </div>
              <button id="submit-review" type="submit" class="btn-submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    try {
      // Fetch data restoran
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      // Pastikan elemen #detail-rest ada
      const restaurantContainer = document.getElementById('detail-rest');
      if (restaurantContainer) {
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      } else {
        console.error('Element #detail-rest tidak ditemukan.');
      }

      // Initialize Like Button
      LikeButtonPresenter.init({
        likeButtonContainer: document.getElementById('likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          rating: restaurant.rating,
        },
      });

      // Event listener untuk submit review
      const submitReview = document.getElementById('submit-review');
      submitReview.addEventListener('click', async (event) => {
        event.preventDefault();
        // Panggil fungsi PostReview
        await PostReview();

        // Fetch ulang data restoran untuk mendapatkan review terbaru
        const updatedRestaurant = await RestaurantSource.detailRestaurant(url.id);

        // Pastikan elemen #detail-rest ada
        const updatedContainer = document.getElementById('detail-rest');
        if (updatedContainer) {
          updatedContainer.innerHTML = createRestaurantDetailTemplate(updatedRestaurant);
        } else {
          console.error('Element #detail-rest tidak ditemukan setelah submit review.');
        }
      });

      // Event listener untuk skip link
      const skipLinkElem = document.querySelector('.skip-link');
      skipLinkElem.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('#main-content').focus();
      });
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  },
};

export default Detail;
