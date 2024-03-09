window.addEventListener('scroll', function () {
  var headerNav = document.querySelector('.nav')
  if (window.scrollY > 0) {
    headerNav.classList.add('scroll-active')
  } else {
    headerNav.classList.remove('scroll-active')
  }
})

document.querySelector('.nav__burger-btn').addEventListener('click', function() {
  document.querySelector('.nav__list').classList.toggle('active-nav');
});