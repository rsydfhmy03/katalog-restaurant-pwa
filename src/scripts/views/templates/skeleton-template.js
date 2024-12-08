const createSkeletonRestaurantTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
        <article tabindex="0" class="card">
          <div class="card-img-container">
            <img class="card-image" alt="skeleton" src="./images/placeholder-medium.jpg" width="100%" height="250px"/>
          </div>
          <div class="card-content">
            <p class="skeleton">Lorem ipsum dolor sit.</p>
            <p class="skeleton">Lorem ipsum dolor sit amet...</p>
          </div>
        </article>
      `;
  }
  return skeleton;
};

export default createSkeletonRestaurantTemplate;
