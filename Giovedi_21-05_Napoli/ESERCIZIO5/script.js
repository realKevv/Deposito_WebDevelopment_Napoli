
const bookForm = document.getElementById('book-form');
const bookContainer = document.getElementById('books-container');

const btnHamburger = document.getElementById('btn-hamburger');
const mainNav = document.getElementById("main-nav");


btnHamburger.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});


bookForm.addEventListener("submit", function (event) {

    event.preventDefault() // blocca il refresh 

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const genere = document.getElementById('book-genere').value;
    const year = document.getElementById('book-year').value;
    const desc = document.getElementById('book-desc').value;


    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');


    bookCard.innerHTML = `
         <h4>${title}</h4>
         <div class="meta-info">${author} | Anno: ${year} | Genere: ${genere}</div>
         <p>${desc}</p>
         `;

         bookContainer.appendChild(bookCard); //prende la card riempita e la mette nel contetnitore vistibile

        bookForm.reset();
})