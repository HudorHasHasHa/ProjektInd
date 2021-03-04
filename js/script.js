const overlay = document.querySelector('.overlay');

function toggleMenu(visible) {
  document.querySelector('.menu-content').classList.toggle('show', visible);
  document.querySelector('.side-nav').classList.toggle('show', visible);
  document.querySelector('.manager').classList.toggle('show', visible);
}

document.querySelector('.side-nav-button').addEventListener('click', function(e) {
  overlay.classList.toggle('is-active');
  e.preventDefault();
  toggleMenu();
});

overlay.addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  overlay.classList.remove('is-active');
});
