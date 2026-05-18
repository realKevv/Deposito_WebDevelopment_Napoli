/*funzione dichiarativa *   definita con la parola chiave function ed hoistata */
function somma(a, b) {
    return a + b;
}


let risultato = somma(4, 10);
console.log(risultato);



/*funzione espressa (function expression) */

const moltiplica = function (a, b) {

    return a * b
}

console.log(moltiplica(4,2))




/*Puoi fare tutto all'interno delle funzioni, mettere metodi, arrays, variabili, condizioni... la funzione ti da UN risultato (tendenzialmente).
La loro figata sono: la scrivi una volta la riutilizzi quante volte ne hai voglia (immaginala come uno stampino che fa sempre quella cosa quando ne hai bisogno tu);
i parametri: la funzione è sempre la stessa ma i parametri sono dinamici! Li puoi cambiare quando vuoi (tipo: fai una somma tra due numeri ma questi due numeri possono 
cambiare, se no sommeresti sempre gli stessi. Percio cambi solo i numeri/parametri, tutto il resto della logica rimane invariata)*/