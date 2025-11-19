// setup date
const date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()
// console.log(date);

// setup navbar

const navBtn = document.getElementById('nav-btn')
const navbar = document.getElementById('navbar')
const navClose = document.getElementById('nav-close')

// console.log(navBtn)
// console.log(navbar)
// console.log(navClose)

navBtn.addEventListener('click', () => {
  navbar.classList.add('showNav')
//   console.log(navbar)
})

navClose.addEventListener('click', () => {
  navbar.classList.remove('showNav')
//   console.log(navbar)
})
