
const prompt = require("prompt-sync")();

/* prima parte raccogliere i dati */


let arrayPrincipale = [];

while (true) {
    let input = prompt("Inserisci un numero o scrivi 0 per terminare: ")
    let numero = Number(input); //da testo a dato numerico

    if (numero === 0) {
        break;
    }

    //controllo solo INTERI
    if (Number.isInteger(numero)) {
        arrayPrincipale.push(numero);
    } else {
        console.log(" hai inserito una lettera/parola o un numero non intero");
    }
}

if (arrayPrincipale.length === 0) {
    console.log("non hai inserito nessun numero")
} else {
    let numeriPari = [];
    let numeriDispari = [];
    let somma = 0;
    let numMassimo = arrayPrincipale[0];
    let numMinimo = arrayPrincipale[0];


    for (let numero of arrayPrincipale) {
        somma += numero; // Aggiungiamo il numero corrente alla somma totale

        if (numero % 2 === 0) {
            numeriPari.push(numero);
        } else {
            numeriDispari.push(numero);
        }
        //spiegazione sotto ma vale l'opposto.
        if (numero > numMassimo) {
            numMassimo = numero;
        }
        //se il numero che ho in iterazione è più piccolo di quello nuovo diventa il nuovo minimo.   <        :)
        if (numero < numMinimo) {
            numMinimo = numero
        }
    }

    console.log("numeri inseriti: " + arrayPrincipale);
    console.log("pari: " + numeriPari);
    console.log("dispari: " + numeriDispari)
    console.log("somma: " + somma);
    console.log("massimo: " + numMassimo);
    console.log("minimo: " + numMinimo);

}




/*extra esercizio  INSIEME DI ARRAY*/

// const prompt = require("prompt-sync")();

// let Insieme = [
//     ["Sicilia", "tavolo", "cane", "   "],
//     [10, 100]
// ];

// console.log("array iniziale = ", Insieme);


// while (true) {
//     let input = prompt("Inserisci un testo o un numero o 0 per uscire:  ")

//     if (input === "0") {
//         break;
//     }
//     let numero = Number(input);  //test conversione


//     if (Number.isInteger(numero)) {
//         Insieme[1].push(numero);
//         console.log("numero aggiunto in posizione 1 dell'array");
//     } else {

//         Insieme[0].push(input);
//         console.log(`Aggiunta la stringa in posizione 0`);
//     }
// }

//     console.log("Tutto l'array: ", Insieme);
//     console.log("Solo le stringhe: ", Insieme[0]);
//     console.log("Solo i numeri : ", Insieme[1]);







