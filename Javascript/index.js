const menuButton = document.querySelector('.menu__button')
const menuInner = document.querySelector('.menu__inner')

menuButton.addEventListener('click', (e) => {
  e.preventDefault()
  menuInner.classList.toggle('show')
})
