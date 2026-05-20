let titolo = document.getElementById("titolo");
let paragrafo = document.getElementById("paragrafo");
let inputNome = document.getElementById("inputNome");
let btnAggiungi = document.getElementById("btnAggiungi");
let lista = document.getElementById("lista");

let btnElimina = document.getElementById("btnElimina");
let btnSvuota = document.getElementById("btnSvuota");

let contatore = document.getElementById("contatore"); 
function aggiornaContatore() {
    if (contatore) {
        contatore.innerText = lista.children.length;
    }
}

btnAggiungi.addEventListener("click", function () {
    let valoreInput = inputNome.value;

    if (valoreInput.trim() === "") {
        alert("Il campo è vuoto!");
        return; 
    }

    let elementiSalvati = lista.getElementsByTagName("li");
    for(let i = 0; i < elementiSalvati.length; i++) {
        if (elementiSalvati[i].innerText === valoreInput) {
            alert("Elemento già presente nella lista!");
            return; 
        }
    }

    let newLi = document.createElement("li");
    newLi.innerText = valoreInput;

    // EXTRA 
    newLi.addEventListener("click", function () {
        newLi.classList.toggle("evidenziato");
    });
    lista.appendChild(newLi);
    inputNome.value = "";
    aggiornaContatore();
});

 
btnElimina.addEventListener("click", function () {
    if (lista.children.length > 0) {
        lista.removeChild(lista.lastElementChild);
        aggiornaContatore(); 
    }
});


// EXTRA
btnSvuota.addEventListener("click", function () {
    lista.innerHTML = ""; 
    aggiornaContatore(); 
});

// mouse sopra il titolo
titolo.addEventListener("mouseover", function () {
    titolo.innerText = "SJ NOC OIZICRESE";
});

// mouse esce dal titolo
titolo.addEventListener("mouseout", function () {
    titolo.innerText = "Esercizio con js";
});


// Tasto della tastiera premuto
inputNome.addEventListener("keydown", function () {
    console.log("L'utente sta digitando nell'input...");
});