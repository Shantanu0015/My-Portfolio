const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

if (menuIcon && nav) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        nav.classList.toggle('active');
    };
}
