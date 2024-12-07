import API_ENDPOINT from "../globals/api-endpoint";
import BaseService from "../globals/baseService";

class RestaurantService {
  static async getRestaurants() {
    const data = await BaseService.get(API_ENDPOINT.LIST);
    return data.restaurants;
  }

  static async detailRestaurant(id) {
    const data = await BaseService.get(API_ENDPOINT.DETAIL(id));
    return data.restaurant;
  }

  static async postReview(reviewData) {
    return BaseService.post(API_ENDPOINT.POST_REVIEW, reviewData);
  }
}

export default RestaurantService;
