// slider
const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let index = 0

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0
  }
  slides[index].style.opacity = 1
}

prev.addEventListener('click', () => {
  index--
  if (index < 0) {
    index = slides.length - 1
  }
  showSlide()
})

next.addEventListener('click', () => {
  index++
  if (index >= slides.length) {
    index = 0
  }
  showSlide()
})

showSlide()
/* Slider Son */
