const PromptSync = require("prompt-sync");

// i// i cicli for sono utilizzati quando si conosce il numero di itereazioni
// for (let i = 0; i < 3; i++) {
//     console.log(i)
// }


// //while esegue il blocco finchè la condizione è vera
// let i = 0;


// while (i < 3) {
//     console.log(i)
//     i++
// }


// //do while esegue almeno una volta il blocco di codice e poi verifica

// let b = 0;

// do {
//     console.log(b)
//     b++
// } while (b < 3);


//while booleano
const prompt = require("prompt-sync")()

let attivo = true;

while(attivo) {

    let comando = prompt("scrivi qualcosa o digita exit:  ");


    //controllo
    if (comando === "esci") {
        console.log("programma terminato");
        attivo = false;
    } else {
        console.log("hai scritto:   " + comando);
    }

}


