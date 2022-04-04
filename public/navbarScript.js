const navbarMenu = document.querySelector('#navbar-menu')
const navbarBurger = document.querySelector('#navbar-burger')

navbarBurger.addEventListener('click', (e) => {
  navbarBurger.classList.toggle('is-active')
  navbarMenu.classList.toggle('is-active')
})
