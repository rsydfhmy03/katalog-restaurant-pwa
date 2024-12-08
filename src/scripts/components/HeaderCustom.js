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
          <button class="menu-button-wrapper">
            <input type="checkbox" class="menu-button" id="menu-toggle" />
            <div class="icon-wrapper">
              <label class="hamburger" aria-label="Toggle Navigation Menu">
                <span class="hamburger-line first"></span>
                <span class="hamburger-line second"></span>
                <span class="hamburger-line third"></span>
              </label>
            </div>
            <div class="item-list">
              <div><a href="/">Home</a></div>
              <div><a href="#/favorite">Favorite</a></div>
              <div><a href="https://www.linkedin.com/in/mitahudev03/" target="_blank">About Us</a></div>
            </div>
          </button>
          <div class="logomob">MitahuResto Apps</div>
        </div>
      `;
  }
}

customElements.define('header-custom', HeaderCustom);
