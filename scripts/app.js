const navSlide = () => {
    const burger = document.querySelector('.burger-btn')
    const nav = document.querySelector('.nav-links')
    const navLink = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.add('nav-active')
    })
    nav.addEventListener('mouseleave', () => {
        nav.classList.remove('nav-active')
    });
}
navSlide()
const navBar = document.querySelector('.top-nav')
window.onscroll = function() { scrollFunction() };

let sticky = navBar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset >= sticky) {
        navBar.classList.add('sticky')
    } else {
        navBar.classList.remove('sticky')
    }
}