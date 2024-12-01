import DrawerInitiator from "../utils/drawer-initiator";
import { initStickyNavbar } from "../utils/navbar-utils";
import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
class App {
  constructor({ button, drawer, content, sliderConfig }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._sliderConfig = sliderConfig;
    this.init();
  }

  init() {
    this._initDrawer();
    this._initStickyNavbar();
    this._initSlider();
    // this._fetchRestaurantData();
  }

  _initDrawer() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initStickyNavbar() {
    initStickyNavbar();
  }

  _initSlider() {
    const { items, next, prev, thumbnails } = this._sliderConfig;
    let itemActive = 0;
    const itemCount = items.length;

    const handleNext = () => {
      itemActive = (itemActive + 1) % itemCount;
      updateSlider();
    };

    const handlePrev = () => {
      itemActive = (itemActive - 1 + itemCount) % itemCount;
      updateSlider();
    };

    const updateSlider = () => {
      document
        .querySelector(".slider .list .item.active")
        ?.classList.remove("active");
      document
        .querySelector(".thumbnail .item.active")
        ?.classList.remove("active");

      items[itemActive].classList.add("active");
      thumbnails[itemActive].classList.add("active");
      adjustThumbnailPosition();
      resetAutoRun();
    };

    const adjustThumbnailPosition = () => {
      const activeThumbnail = document.querySelector(".thumbnail .item.active");
      if (activeThumbnail) {
        const rect = activeThumbnail.getBoundingClientRect();
        if (rect.left < 0 || rect.right > window.innerWidth) {
          activeThumbnail.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
          });
        }
      }
    };

    let autoRunInterval = setInterval(handleNext, 5000);
    const resetAutoRun = () => {
      clearInterval(autoRunInterval);
      autoRunInterval = setInterval(handleNext, 5000);
    };

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        itemActive = index;
        updateSlider();
      });
    });

    next.addEventListener("click", handleNext);
    prev.addEventListener("click", handlePrev);
  }
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  //   Ini old
  //   async _fetchRestaurantData() {
  //     document.addEventListener("DOMContentLoaded", async () => {
  //       try {
  //         const { default: jsonData } = await import(
  //           "../../public/data/DATA.json"
  //         );
  //         const restaurants = jsonData.restaurants;
  //         const restaurantList = restaurants
  //           .map(
  //             (restaurant) => `
  //             <div class="list_item card">
  //               <img class="list_item_thumb" src="${restaurant.pictureId}" alt="${
  //               restaurant.name
  //             }" />
  //               <div class="city">${restaurant.city}</div>
  //               <div class="list_item_content">
  //                 <p class="list_item_rating">Rating:
  //                   <a href="#" class="list_item_rating_value">${
  //                     restaurant.rating
  //                   }</a>
  //                 </p>
  //                 <h1 class="list_item_title">${restaurant.name}</h1>
  //                 <p class="list_item_desc">${restaurant.description.slice(
  //                   0,
  //                   150
  //                 )}...</p>
  //               </div>
  //             </div>`
  //           )
  //           .join("");

  //         document.querySelector("#list-restaurant").innerHTML = restaurantList;
  //         document.querySelector(".loader").style.display = "none";
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     });
  //   }
}

export default App;
