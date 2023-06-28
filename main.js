const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

