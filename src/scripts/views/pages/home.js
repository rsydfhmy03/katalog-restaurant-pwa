import RestaurantSource from "../../data/restaurant-source";
import {
  createRestaurantItemTemplate,
  createSkeletonRestaurantTemplate,
} from "../templates/templates-creators";

const Home = {
  async render() {
    return `
            <section class="content">
                <div class="latest">
                    <h1>Explore Restaurant</h1>
                    <div class="list" id="explore-restaurant-list">${createSkeletonRestaurantTemplate(
                      20
                    )}</div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const listRestaurant = await RestaurantSource.getRestaurants();
    const restaurantContainer = document.getElementById(
      "explore-restaurant-list"
    );
    restaurantContainer.innerHTML = "";
    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
