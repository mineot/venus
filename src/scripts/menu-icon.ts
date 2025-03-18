const menuIcon = document.querySelector('body > header > i');
const menuClose = document.querySelector('body > aside > i');
const aside = document.querySelector('body > aside');

if (menuIcon && menuClose && aside) {
  menuIcon.addEventListener('click', () => aside.classList.add('open'));
  menuClose.addEventListener('click', () => aside.classList.remove('open'));
  window.addEventListener('resize', () => aside.classList.remove('open'));
}
