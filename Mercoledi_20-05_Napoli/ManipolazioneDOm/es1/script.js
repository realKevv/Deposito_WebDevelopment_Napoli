
let titolo = document.getElementById("titolo");

let testo = document.getElementById("testo");

let bottone = document.getElementById("bottone");

let lista = document.getElementById("lista");


titolo.innerHTML = "titolo modificato con JS";

bottone.addEventListener("click", function() {

    testo.innerHTML = "testo modificato";

    let nuovoElemento = document.createElement("li");
    nuovoElemento.innerHTML = "Nuovo elemento";

    lista.appendChild(nuovoElemento);

});

