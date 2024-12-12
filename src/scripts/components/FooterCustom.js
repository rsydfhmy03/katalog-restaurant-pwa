// src/scripts/component/FooterCustom.js
class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
      <p>
        &copy; <span>Fahmy Rosyadi MitahuResto Apps 2024.</span> All rights
        reserved.
      </p>
    </footer>
      `;
  }
}

customElements.define('footer-custom', FooterCustom);
