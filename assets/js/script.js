const aside = document.querySelector("aside")
const menuButton = document.querySelector(".nav-icon")
const closeButton = document.querySelector(".close-icon")
const header = document.querySelector("header")
const sticky = header.offsetTop


menuButton.addEventListener('click', function () {
  aside.style.display = 'block'
})

closeButton.addEventListener('click', function () {
  aside.style.display = 'none'
})

window.onscroll = function () { stickyHeader() }

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add('sticky')
  }
  else {
    header.classList.remove('sticky')
  }
}


