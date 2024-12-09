class SliderCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="slider">
          <div class="list">
            <div class="item active">
              <img src="images/heros/hero-image_1.jpg" alt="Taste of Tradition" />
              <div class="content">
                <p>Taste of Tradition</p>
                <h2>Explore the Taste of Tradition</h2>
              </div>
            </div>
            <div class="item">
              <img src="images/heros/hero-image_2.jpg" alt="Fresh & Local" />
              <div class="content">
                <p>Fresh & Local</p>
                <h2>Farm-to-Table Delights</h2>
              </div>
            </div>
            <div class="item">
              <img src="images/heros/hero-image_3.jpg" alt="Signature Dishes" />
              <div class="content">
                <p>Signature Dishes</p>
                <h2>A Feast for Your Senses</h2>
              </div>
            </div>
          </div>
          <div class="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
          </div>
          <div class="thumbnail">
            <div class="item active">
              <img src="images/heros/hero-image_1.jpg" alt="Taste of Tradition" />
              <div class="content">Taste of Tradition</div>
            </div>
            <div class="item">
              <img src="images/heros/hero-image_2.jpg" alt="Fresh & Local" />
              <div class="content">Fresh & Local</div>
            </div>
            <div class="item">
              <img src="images/heros/hero-image_3.jpg" alt="Signature Dishes" />
              <div class="content">Signature Dishes</div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define('slider-custom', SliderCustom);
