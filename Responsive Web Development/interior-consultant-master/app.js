const menuIcon = document.querySelector('.nav__button > img');
const navList = document.querySelector('.nav__list');

menuIcon.addEventListener('click', () => {
  // toggle  visibility of nav__list and change src of icon
  navList.classList.toggle('show');
  navList.className.includes('show')
    ? (menuIcon.src = './images/close-icon.svg')
    : (menuIcon.src = './images/menu-icon.svg');
});
