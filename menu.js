let menu = document.getElementById("menu")
let mobileMenu = document.getElementById("mobile-menu")
let mobileMenuOpen = document.getElementById("hamburger")
let mobileMenuClose = document.getElementById("x-hamburger")

menu.addEventListener("click", function () {
  if (mobileMenu.classList.contains("slide-in")) {
    mobileMenu.classList.remove("slide-in")
    mobileMenuClose.classList.remove("hidden")
    mobileMenuOpen.classList.add("hidden")
  } else {
    mobileMenu.classList.add("slide-in")
    mobileMenuClose.classList.add("hidden")
    mobileMenuOpen.classList.remove("hidden")
  }
})

function resetForm() {
  toggleModal()
  document.getElementById("contactForm").reset()
}

function resetForm2() {
  let phoneNumber = document.getElementById("phonenumber")
  if (phoneNumber.value != "") {
    toggleModal()
    document.getElementById("contactForm2").reset()
  }
}

// modal
var openmodal = document.querySelectorAll(".modal-open")
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener("click", function (event) {
    event.preventDefault()
    toggleModal()
  })
}

const overlay = document.querySelector(".modal-overlay")
overlay.addEventListener("click", toggleModal)

var closemodal = document.querySelectorAll(".modal-close")
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener("click", toggleModal)
}

document.onkeydown = function (evt) {
  evt = evt || window.event
  var isEscape = false
  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc"
  } else {
    isEscape = evt.keyCode === 27
  }
  if (isEscape && document.body.classList.contains("modal-active")) {
    toggleModal()
  }
}

function toggleModal() {
  const body = document.querySelector("body")
  const modal = document.querySelector(".modal")
  modal.classList.toggle("opacity-0")
  modal.classList.toggle("pointer-events-none")
  body.classList.toggle("modal-active")
}

