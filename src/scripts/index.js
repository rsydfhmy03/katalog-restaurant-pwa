import "regenerator-runtime"; // Untuk dukungan async/await
import "../styles/main.scss";
import "../styles/responsive.scss";
import App from "./views/app";

const app = new App({
  button: document.querySelector(".menu-button-wrapper"),
  drawer: document.querySelector(".item-list"),
  content: document.querySelector("#content"),
  sliderConfig: {
    items: document.querySelectorAll(".slider .list .item"),
    next: document.getElementById("next"),
    prev: document.getElementById("prev"),
    thumbnails: document.querySelectorAll(".thumbnail .item"),
  },
});
// app.init();
window.addEventListener("hashchange", () => {
  //   app.init();
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  //   swRegister();
});
