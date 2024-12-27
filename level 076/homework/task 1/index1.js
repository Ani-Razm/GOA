let navList = document.querySelector('.nav-list');
let menu = document.querySelector('#menu-icon');

menu.addEventListener("click", function () {
    menu.classList.toggle("bx-x");
    navList.classList.toggle("open");
})