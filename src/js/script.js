const overlay = document.querySelector('.overlay');

function toggleMenu(visible) {
  document.querySelector('.menu-content').classList.toggle('show', visible);
  document.querySelector('.side-nav').classList.toggle('show', visible);
}

document.querySelector('.side-nav-button').addEventListener('click', function(e) {
  overlay.classList.toggle('is-active');
  e.preventDefault();
  toggleMenu();
});

overlay.addEventListener('click', function() {
  toggleMenu();
  overlay.classList.remove('is-active');
});
