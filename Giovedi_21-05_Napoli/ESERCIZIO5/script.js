
const bookForm = document.getElementById('book-form');
const bookContainer = document.getElementById('books-container');

const btnHamburger = document.getElementById('btn-hamburger');
const mainNav = document.getElementById("main-nav");


btnHamburger.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

