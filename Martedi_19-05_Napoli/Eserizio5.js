

const prompt = require('prompt-sync')();

function verificaParole(parola) {
    if (parola.length === 0) {
        return false;
    }

    if (isNaN(Number(parola)) === false) {
        return false;
    }
    return true;
}


function ParolaPiuLunga(lista) {
    let parolaPiuLunga = "";

    for (let i = 0; i < lista.length; i++) {

        if (lista[i].length > parolaPiuLunga.length) {
            parolaPiuLunga = lista[i];
        }
    }
    return parolaPiuLunga;
}


function ParolaPiuCorta(lista) {
    let parolaPiuCorta = lista[0];

    for (let i = 1; i < lista.length; i++) {

        if (lista[i].length < parolaPiuCorta.length) {
            parolaPiuCorta = lista[i];
        }
    }
    return parolaPiuCorta;

}

function contaParoleConVocale(lista) {
    let contatore = 0;

    for (let i = 0; i < lista.length; i++) {
        let primaLettera = lista[i][0].toLowerCase();

        // Se è una vocale aumentiamo il contatore 
        if (primaLettera === "a" || primaLettera === "e" || primaLettera === "i" || primaLettera === "o" || primaLettera === "u") {
            contatore++;
        }
    }
    return contatore;
}

function trasformaInMaiuscolo(lista) {
    let listaMaiuscola = [];

    for (let i = 0; i < lista.length; i++) {
        listaMaiuscola.push(lista[i].toUpperCase());
    }
    return listaMaiuscola;
}

let elencoParole = [];
let InserimentoParole = true;

console.log("Inserisci una parola alla volta. Scrivi 'fine' per terminare l'inserimento.");

do {
    let parolaUtente = prompt("Inserisci una parola (o 'fine' per terminare): ");

    let parola = parolaUtente.trim();

    if (parola.toLowerCase() === "fine") {
        InserimentoParole = false;
        console.log("Hai terminato l'inserimento delle parole.");
    } else {

        if (verificaParole(parola)) {  

            //true
            elencoParole.push(parola);
            console.log("Parola aggiunta: " + parola);

        } else {
            //false
            console.log("Errore: inserisci una parola valida (non numerica e non vuota).");
        }

    }

    //     else {
    //         elencoParole.push(parola);
    //         console.log("Parola aggiunta: " + parola);
    //     }
} while (InserimentoParole);



// elaborazione e stampe finali
if (elencoParole.length > 0) {
    let parolaPiuLunga = ParolaPiuLunga(elencoParole);
    let parolaPiuCorta = ParolaPiuCorta(elencoParole);
    let paroleConVocale = contaParoleConVocale(elencoParole);
    let elencoMaiuscolo = trasformaInMaiuscolo(elencoParole);


    console.log("1. il numero totale di parole inserite è: " + elencoParole.length);
    console.log("2. la parola più lunga è: " + parolaPiuLunga);
    console.log("3. la parola più corta è: " + parolaPiuCorta);
    console.log("4. il numero di parole che iniziano con una vocale è: " , paroleConVocale);
    console.log("5. l'elenco delle parole in maiuscolo è: " , elencoMaiuscolo);
}



console.log("\n PROGRAMMA TERMINATO ");
console.log("Ecco la tua lista: ", elencoParole);
