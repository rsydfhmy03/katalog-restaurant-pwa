import 'regenerator-runtime'; // Untuk dukungan async/await
import '../styles/main.scss';
import '../styles/responsive.scss';

// Slider Configuration
const items = document.querySelectorAll('.slider .list .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const thumbnails = document.querySelectorAll('.thumbnail .item');

let itemActive = 0; // Indeks slider aktif
const itemCount = items.length;

// Event Handler untuk tombol Next
const handleNext = () => {
  itemActive = (itemActive + 1) % itemCount;
  updateSlider();
};

// Event Handler untuk tombol Prev
const handlePrev = () => {
  itemActive = (itemActive - 1 + itemCount) % itemCount;
  updateSlider();
};

// Fungsi untuk memperbarui slider
const updateSlider = () => {
  document
    .querySelector('.slider .list .item.active')
    ?.classList.remove('active');
  document.querySelector('.thumbnail .item.active')?.classList.remove('active');

  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  adjustThumbnailPosition();

  resetAutoRun();
};

// Memastikan posisi thumbnail selalu terlihat
const adjustThumbnailPosition = () => {
  const activeThumbnail = document.querySelector('.thumbnail .item.active');
  if (activeThumbnail) {
    const rect = activeThumbnail.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
      activeThumbnail.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  }
};

// Reset Auto-Run Slider
let autoRunInterval = setInterval(handleNext, 5000);
const resetAutoRun = () => {
  clearInterval(autoRunInterval);
  autoRunInterval = setInterval(handleNext, 5000);
};

// Event Listener pada Thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    itemActive = index;
    updateSlider();
  });
});

// Event Listeners untuk tombol
next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev);

// DOM Content Loaded: Fetch Data dan Loader
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const { default: jsonData } = await import('../public/data/DATA.json');
    const restaurants = jsonData.restaurants;
    const restaurantList = restaurants
      .map(
        (restaurant) => `
          <div class="list_item card">
            <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${
  restaurant.name
}" />
            <div class="city">${restaurant.city}</div>
            <div class="list_item_content">
              <p class="list_item_rating">Rating: 
                <a href="#" class="list_item_rating_value">${
  restaurant.rating
}</a>
              </p>  
              <h1 class="list_item_title">${restaurant.name}</h1>
              <p class="list_item_desc">${restaurant.description.slice(
    0,
    150
  )}...</p>
            </div>
          </div>`
      )
      .join('');

    document.querySelector('#list-restaurant').innerHTML = restaurantList;

    // Sembunyikan loader
    document.querySelector('.loader').style.display = 'none';
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Sticky Navbar
const addStickyClass = (selector, className) => {
  const element = document.querySelector(selector);
  if (window.scrollY > 50) {
    element?.classList.add(className);
  } else {
    element?.classList.remove(className);
  }
};

window.addEventListener('scroll', () => {
  addStickyClass('.nav', 'sticky');
  addStickyClass('.navmob', 'sticky');
});
