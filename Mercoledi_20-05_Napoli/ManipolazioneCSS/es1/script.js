let bottone = document.getElementById("btn");
let testo = document.getElementById("testo");

bottone.addEventListener("click", function() {
    testo.classList.toggle("evidenziato");
});
