const addStickyClass = (selector, className) => {
  const element = document.querySelector(selector);
  if (window.scrollY > 50) {
    element?.classList.add(className);
  } else {
    element?.classList.remove(className);
  }
};

const initStickyNavbar = () => {
  window.addEventListener('scroll', () => {
    addStickyClass('.nav', 'sticky');
    addStickyClass('.navmob', 'sticky');
  });
};

export { initStickyNavbar };
