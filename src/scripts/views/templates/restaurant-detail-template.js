import CONFIG from '../../globals/config';

const createSourceTag = (srcSet, type, media) =>
  `<source class="detail-img lazyload" srcset="${srcSet}" type="${type}" media="${media}" />`;

const createPictureTemplate = (pictureId, name) => {
  const mediaQueries = {
    smallMobile: '(max-width: 300px)',
    mobile: '(max-width: 480px)',
    tablet: '(min-width: 481px) and (max-width: 900px)',
    desktop: '(min-width: 901px)',
  };

  const sources = [
    {
      srcSet: CONFIG.BASE_IMAGE_SMALL_URL + pictureId,
      type: 'image/webp',
      media: mediaQueries.smallMobile,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_SMALL_URL + pictureId,
      type: 'image/jpeg',
      media: mediaQueries.smallMobile,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_SMALL_URL + pictureId,
      type: 'image/webp',
      media: mediaQueries.mobile,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_SMALL_URL + pictureId,
      type: 'image/jpeg',
      media: mediaQueries.mobile,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_MEDIUM_URL + pictureId,
      type: 'image/webp',
      media: mediaQueries.tablet,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_MEDIUM_URL + pictureId,
      type: 'image/jpeg',
      media: mediaQueries.tablet,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_LARGE_URL + pictureId,
      type: 'image/webp',
      media: mediaQueries.desktop,
    },
    {
      srcSet: CONFIG.BASE_IMAGE_LARGE_URL + pictureId,
      type: 'image/jpeg',
      media: mediaQueries.desktop,
    },
  ];

  const pictureSources = sources
    .map((source) => createSourceTag(source.srcSet, source.type, source.media))
    .join('\n');

  return `
      <picture>
        ${pictureSources}
        <img class="detail-img lazyload" data-src="${
  CONFIG.BASE_IMAGE_SMALL_URL + pictureId
}" alt="${name}" />
      </picture>
    `;
};

const createDetailInfoTemplate = (restaurant) => `
  <ul class="detail-info">
    <li class="resto-name">
      <i title="restaurant" class="fas fa-store-alt icon-primary"></i>
      <p class="detail-name-address-rating">${restaurant.name}</p>
    </li>
    <li class="resto-address">
      <i title="address" class="fas fa-map-marker-alt icon-primary"></i>
      <p class="detail-name-address-rating">${restaurant.address}, ${
  restaurant.city
}</p>
    </li>
    <li class="resto-rating">
      <i title="ratings" class="fas fa-star icon-primary"></i>
      <p class="detail-name-address-rating">${restaurant.rating}</p>
    </li>
    <li><p class="detail-desc">${restaurant.description}</p></li>
    <li class="resto-category">
      ${restaurant.categories
    .map((category) => `<span class="category">${category.name}</span>`)
    .join('')}
    </li>
  </ul>
`;

const createMenuTemplate = (menus) => `
  <div class="detail-menu">
    <div class="detail-food">
      <h4>Katalog Makanan</h4>
      <ul>
        ${
  menus?.foods
    ?.map((food) => `<li><p>${food.name}</p></li>`)
    .join('') || '<li>Tidak ada makanan</li>'
}
      </ul>
    </div>
    <div class="detail-drink">
      <h4>Katalog Minuman</h4>
      <ul>
        ${
  menus?.drinks
    ?.map((drink) => `<li><p>${drink.name}</p></li>`)
    .join('') || '<li>Tidak ada minuman</li>'
}
      </ul>
    </div>
  </div>
`;

const createReviewsTemplate = (customerReviews) => `
  <div class="detail-review">
    ${
  customerReviews
    ?.map(
      (review) => `
        <div class="detail-review-item">
          <div class="header-review">
            <p class="name-review">
              <i title="restaurant" class="fa fa-user-circle" style="font-size:1.3em; padding-right:10px;"></i>${review.name}
            </p>
            <p class="date-review">${review.date}</p>
          </div>
          <div class="body-review">${review.review}</div>
        </div>
      `
    )
    .join('') || '<p>Belum ada ulasan</p>'
}
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="detail">
    <div tabindex="0" class="container-info">
      <div class="img-container">
        ${createPictureTemplate(restaurant.pictureId, restaurant.name)}
      </div>
      ${createDetailInfoTemplate(restaurant)}
    </div>
    <h3 tabindex="0">Menu</h3>
    ${createMenuTemplate(restaurant.menus)}
    <h3 tabindex="0" class="title-review">Reviews</h3>
    ${createReviewsTemplate(restaurant.customerReviews)}
  </div>
`;

export default createRestaurantDetailTemplate;
