
const prompt = require('prompt-sync')();

function somma(numeri) {
    let totale = 0;
    for (let i = 0; i < numeri.length; i++) {
        totale = totale + numeri[i];
    }
    return totale;
}

function sottrazione(numeri) {
    let totale = numeri[0]; 
    for (let i = 1; i < numeri.length; i++) { 
        totale = totale - numeri[i];
    }
    return totale; 
}

function moltiplicazione(numeri) {
    let totale = 1; // Partiamo da 1
    for (let i = 0; i < numeri.length; i++) {
        totale = totale * numeri[i]; 
    }
    return totale; 
}

function divisione(numeri) {
    let risultato = numeri[0];
    for (let i = 1; i < numeri.length; i++) {
        if (numeri[i] === 0) {
            return "non puoi dividere per zero";
        }
        risultato = risultato / numeri[i];
    }
    return risultato;
}

let risultati = [];


while (true) {

    let scelta = prompt("Scegli l'operazione:\n" +
        "1: Addizione\n" +
        "2: Sottrazione\n" +
        "3: Moltiplicazione\n" +
        "4: Divisione\n\n" +
        "Scrivi 'stop' per uscire."
    );

    if (scelta === null || scelta.trim() === "stop") {
        console.log("Uscita dal programma.");
        break;
    }

    if (["1", "2", "3", "4"].includes(scelta)) {
        let inputNum = prompt("Inserisci qui i tuoi due numeri separati da spazio:");
        if (inputNum === null) {
            console.log("Uscita dal programma.");
            break;
        }

        let ArrayStringhe = inputNum.trim().split(" ");


        let arrayNum = [];
        let err = false;


        for (let i = 0; i < ArrayStringhe.length; i++) {
            let n = Number(ArrayStringhe[i]);
            if (isNaN(n)) {
                err = true;
                break;
            }
            arrayNum.push(n);
        }

        if (err || arrayNum.length < 2) {
            console.log("Errore: inserisci due numeri validi, separati da uno spazio.");
            continue;
        }

        let risultato;
        if (scelta === "1") risultato = somma(arrayNum);
        if (scelta === "2") risultato = sottrazione(arrayNum);
        if (scelta === "3") risultato = moltiplicazione(arrayNum);
        if (scelta === "4") risultato = divisione(arrayNum);

        console.log("Il risultato è: " + risultato);
        risultati.push(risultato);
    } else {
        console.log("Scelta non valida. Riprova.");
    }
}


console.log("tutti i risultati: " + risultati);