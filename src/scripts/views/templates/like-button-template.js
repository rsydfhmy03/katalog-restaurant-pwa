const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-hear-o" aria-hidden="true"></i>
    <span>&#43;</span>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="unlike">
    <i class="fa fa-heart" class="unlike-icon" aria-hidden="true"></i>
    
  </button>
`;

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
