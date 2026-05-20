
let titolo = document.getElementById("titolo");
let mioDiv = document.getElementById("mioDiv");
let testoDiv = document.getElementById("testoDiv");
let inputTesto = document.getElementById("inputTesto");

let bottoneAggiungi = document.getElementById("bottoneAggiungi");
let bottoneElimina = document.getElementById("bottoneElimina");
let bottoneModificaStile = document.getElementById("bottoneModificaStile");


let listaVuota = document.getElementById("listaVuota");

let contatore = document.getElementById("contatore");

/*evento1*/

/*value per scrivere dentro un input/textarea, 
innerHTML per scrivere dentro un div/p/span ecc...*/
bottoneAggiungi.addEventListener("click", function () {
    let testoSalvato = inputTesto.value;

    if (testoSalvato.trim() !== "") {
        let nuovoElemento = document.createElement("li");
        nuovoElemento.innerHTML = testoSalvato;

        nuovoElemento.addEventListener("click", function () {
            listaVuota.removeChild(nuovoElemento);

            aggiornaContatore();
        });
        listaVuota.appendChild(nuovoElemento);

        // Pulizia dell'input dopo l'aggiunta
        inputTesto.value = "";
    }
});



/*evento2*/

bottoneElimina.addEventListener("click", function () {
    if (listaVuota.children.length > 0) {
        let ulttimoElemento = listaVuota.lastElementChild;
        listaVuota.removeChild(ulttimoElemento)

        aggiornaContatore();
    }
});

/*evento3*/
bottoneModificaStile.addEventListener("click", function () {
    titolo.style.color = "blue";
    titolo.innerHTML = "NUOVO TITOLOOO";

    mioDiv.style.backgroundColor = "red";

    mioDiv.style.fontSize = "30px";

    mioDiv.style.border = "2px solid black";

    if (mioDiv.style.display !== "none") {
        mioDiv.style.display = "none";
    } else {
        mioDiv.style.display = "block";
    }

})

function aggiornaContatore(){
    let numeroElementi = listaVuota.children.length;
    contatore.innerText = numeroElementi;   
}



