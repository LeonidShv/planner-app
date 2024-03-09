const headerNav = document.querySelector('.nav')

window.addEventListener('scroll', function () {
  const isNavActive = headerNav.classList.contains('scroll-active')

  if (window.scrollY > 0 && !isNavActive) {
    headerNav.classList.add('scroll-active')
  } else if (window.scrollY === 0 && isNavActive) {
    headerNav.classList.remove('scroll-active')
  }
})

document.querySelector('.nav__burger-btn').addEventListener('click', function () {
  document.querySelector('.nav__list').classList.toggle('active-nav')
})

const inputEmail = document.querySelector('.header__input')

inputEmail.addEventListener('input', function () {
  if (inputEmail.classList.contains('error')) {
    inputEmail.classList.remove('error')
  }
})

document.querySelector('.header__button').addEventListener('click', async function () {
  const email = inputEmail.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    inputEmail.classList.toggle('error')
    return false
  }

  await fetch(`https://httpbin.org/get?email=${email}`)
  toggleModal()
})

function toggleModal() {
  document.querySelector('.modal-wrapper').classList.toggle('hide')
  document.body.classList.toggle('scroll-disabled')
}

document.querySelector('.modal__btn').addEventListener('click', function () {
  toggleModal()
  document.querySelector('.header__input').value = ''
})
