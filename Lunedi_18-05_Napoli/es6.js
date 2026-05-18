const prompt = require("prompt-sync")()
    let N;

    // se inseriamo una stringa, number(input) diventerà NaN, e il ciclo continuerà 


    //continua a chiedere finché il dato non è un numero intero positivo. (quando l'input è corretto, il break fa uscire)
    while (true) {
    let input = prompt("Inserisci un numero intero positivo: ");
    N = Number(input); 

    if (isNaN(N) || N <= 0 || !Number.isInteger(N)) {
        console.log("ERRORE: solo numeri interi positivi.");
    } else {
        break; 
    }
}
    let numeriPari = 0;
    let numeriDispari = 0;

    let i = 1;  
 
//Sa già quante volte girare (N volte). Conta i pari e i dispari da 1 a N.
    while (i <= N) {

        if (i % 2 === 0) {
            numeriPari++
        } else {
            numeriDispari++
        }
        i++ 
    }

    console.log("I numeri sono da 1 a " + N + ":");
    console.log("numeri pari: " + numeriPari);
    console.log("numeri dispari: " + numeriDispari);




