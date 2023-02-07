const menuButton = document.querySelector('.menu__button')
const menuInner = document.querySelector('.menu__inner')

menuButton.addEventListener('click', (e) => {
  e.preventDefault()
  menuInner.classList.toggle('show')
})

const languagebtn = document.querySelectorAll('.language')

console.log(languagebtn)

languagebtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    if (item.innerText === 'EN') {
      languagebtn[0].classList.add('active')
      languagebtn[1].classList.remove('active')
    } else {
      languagebtn[1].classList.add('active')
      languagebtn[0].classList.remove('active')
    }
  })
})
