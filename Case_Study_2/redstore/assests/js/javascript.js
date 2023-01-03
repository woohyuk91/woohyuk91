const navMenu = document.querySelector(".navbar-menu");
const navToggle = document.querySelector('.navbar__list');
const overlay = document.querySelector('.overlay');
function toggleMenu() {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    navToggle.classList.toggle('active');

}
navMenu.addEventListener('click', toggleMenu);
const loginActive = document.querySelector('.login');
const registerActive = document.querySelector('.reg');
const loginForm = document.getElementById('Loginform');
const registerForm = document.getElementById('Regform');
const indicator = document.getElementById('indicator');
function toggleLogin() {
    loginActive.classList.toggle('active');
    registerActive.classList.remove('active');
    registerForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}
function toggleRegister() {
    registerActive.classList.toggle('active');
    loginActive.classList.remove('active');
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
    

}
loginActive.addEventListener('click', toggleLogin);
registerActive.addEventListener('click', toggleRegister);