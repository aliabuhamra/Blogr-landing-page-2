const navMain = document.querySelector('.nav-main');
const menuToggle = document.querySelector('.toggle')
const btn = document.querySelector('.hamburger-icon')
const btnClose = document.querySelector('.hamburger-close')

menuToggle.addEventListener('click', function () {
    showNavigation()
})


// show navigation
function showNavigation() {
    menuToggle.classList.toggle('toggle--active')
    navMain.classList.toggle('nav-main--active');
}
