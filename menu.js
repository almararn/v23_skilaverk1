
let menu = document.getElementById('menu');
let mobileMenu = document.getElementById('mobile-menu');
let mobileMenuOpen = document.getElementById('hamburger');
let mobileMenuClose = document.getElementById('x-hamburger');


menu.addEventListener('click', function() {
    if(mobileMenu.classList.contains('slide-in')) {
        mobileMenu.classList.remove('slide-in');
        mobileMenuClose.classList.remove('hidden');
        mobileMenuOpen.classList.add('hidden');
        console.log('slide-in')
    }else{
        mobileMenu.classList.add('slide-in');
        mobileMenuClose.classList.add('hidden');
        mobileMenuOpen.classList.remove('hidden');
        console.log('slide-in-removed')
    }
});

function resetForm() {
    document.getElementById("contactForm").reset();
    alert("Your message has been sent!");
  }