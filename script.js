// JavaScript for toggling the menu
const navMenu = document.querySelector('.nav__menu');
const navToggle = document.querySelector('.nav__toggle');
const navClose = document.querySelector('.nav__close');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// Close the menu when clicking the close icon
navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

// JavaScript for closing the menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickInsideToggle = navToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideToggle) {
    navMenu.classList.remove('show-menu');
  }
});
