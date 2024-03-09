const headerNav = document.querySelector('.nav');
window.addEventListener('scroll', function () {
  const isNavActive = headerNav.classList.contains('scroll-active');

  if (window.scrollY > 0 && !isNavActive) {
    headerNav.classList.add('scroll-active');
  } else if (window.scrollY === 0 && isNavActive) {
    headerNav.classList.remove('scroll-active');
  }
})

document.querySelector('.nav__burger-btn').addEventListener('click', function() {
  document.querySelector('.nav__list').classList.toggle('active-nav');
});