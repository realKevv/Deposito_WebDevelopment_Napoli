let input = document.getElementById("nome");
let bottone = document.getElementById("btn");
let output = document.getElementById("output");



// event  listener

bottone.addEventListener("click", function() {

    let nome = input.value;

    if (nome === "") {
        output.textContent = "Per favore, inserisci un nome.";
    } else {

        output.textContent = "Ciao, " + nome + "!"; 

    }
});