class SliderCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="slider">
          <div class="list">
            <div class="item active">
            <picture>
              <source media="(max-width: 480px)" srcset="images/heros/hero-image1_mini-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image1_mini-medium.jpg" />
              <img src="images/heros/hero-image1_mini-large.jpg" alt="Taste of Tradition" loading="eager" decoding="async" />
            </picture>
              <div class="content">
                <p>Taste of Tradition</p>
                <h2>Explore the Taste of Tradition</h2>
              </div>
            </div>
            <div class="item">
            <picture>
              <source media="(max-width: 480px)" srcset="images/heros/hero-image_2-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image_2-medium.jpg" />
              <img src="images/heros/hero-image_2-large.jpg" alt="Fresh & Local" loading="lazy" decoding="async" />
            </picture>
              <div class="content">
                <p>Fresh & Local</p>
                <h2>Farm-to-Table Delights</h2>
              </div>
            </div>
            <div class="item">
            <picture>
              <source media="(max-width: 480px)" srcset="images/heros/hero-image_3-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image_3-medium.jpg" />
              <img src="images/heros/hero-image_3-large.jpg" alt="Signature Dishes" loading="lazy" decoding="async" />
            </picture>
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
            <picture class=" ls-is-cached lazyloaded">
              <source media="(max-width: 480px)" srcset="images/heros/hero-image1_mini-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image1_mini-medium.jpg" />
              <img src="images/heros/hero-image1_mini-large.jpg" alt="Taste of Tradition" loading="eager" decoding="async" class=" ls-is-cached lazyloaded" />
            </picture class=" ls-is-cached lazyloaded">
              <div class="content">Taste of Tradition</div>
            </div>
            <div class="item">
            <picture class=" ls-is-cached lazyloaded">
              <source media="(max-width: 480px)" srcset="images/heros/hero-image_2-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image_2-medium.jpg" />
              <img src="images/heros/hero-image_2-large.jpg" alt="Fresh & Local" loading="lazy" decoding="async" class=" ls-is-cached lazyloaded" />
            </picture>
            <div class="content">Fresh & Local</div>
            </div>
            <div class="item">
            <picture class=" ls-is-cached lazyloaded">
              <source media="(max-width: 480px)" srcset="images/heros/hero-image_3-small.jpg" />
              <source media="(max-width: 800px)" srcset="images/heros/hero-image_3-medium.jpg" />
              <img src="images/heros/hero-image_3-large.jpg" alt="Signature Dishes" loading="lazy" decoding="async" class=" ls-is-cached lazyloaded" />
            </picture>
            <div class="content">Signature Dishes</div>
            </div>
          </div>
        </div>
      `;
  }
}

customElements.define('slider-custom', SliderCustom);
