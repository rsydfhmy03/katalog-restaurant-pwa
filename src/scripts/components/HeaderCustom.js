class HeaderCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Desktop Navbar -->
      <nav class="nav">
        <a class="logo" href="">MitahuResto Apps</a>
        <ul class="navlist">
          <li class="navitems"><a href="/">Home</a></li>
          <li class="navitems"><a href="#/favorite">Favorite</a></li>
          <li class="navitems"><a target="_blank" href="https://www.linkedin.com/in/mitahudev03/">About Us</a></li>
        </ul>
      </nav>
  
      <!-- Mobile Navbar -->
      <div class="menumob">
        <button 
          class="menu-button-wrapper" 
          aria-controls="menu-list" 
          aria-expanded="false" 
          aria-label="Toggle Navigation Menu">
          <div class="icon-wrapper">
            <div class="hamburger">
              <span class="hamburger-line first"></span>
              <span class="hamburger-line second"></span>
              <span class="hamburger-line third"></span>
            </div>
          </div>
        </button>
        <div class="item-list" id="menu-list">
          <div><a href="/">Home</a></div>
          <div><a href="#/favorite">Favorite</a></div>
          <div><a href="https://www.linkedin.com/in/mitahudev03/" target="_blank">About Us</a></div>
        </div>
        <div class="logomob">MitahuResto Apps</div>
      </div>
    `;

    this.attachEventHandlers();
  }

  attachEventHandlers() {
    const menuButton = this.querySelector('.menu-button-wrapper');
    const menuList = this.querySelector('.item-list');

    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);

      if (!isExpanded) {
        menuList.style.transform = 'translateX(-50%) scale(1)';
        menuList.style.opacity = '1';
      } else {
        menuList.style.transform = 'translateX(-50%) scale(0)';
        menuList.style.opacity = '0';
      }
    });

    menuButton.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        menuButton.click();
      }
    });
  }
}

customElements.define('header-custom', HeaderCustom);
