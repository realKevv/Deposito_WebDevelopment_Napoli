
/*condizioni*/

// let eta = 18

// if (eta >= 18) {
//     console.log("maggiorenne");
// } else {
//     console.log("minorenne");
// }

// let voto = 100;

// if (voto > 90) {
//     console.log("ottimo")
// } else if (voto >= 60){
//     console.log("sufficente")
// } else {
//     console.log("insufficente");
// }

/*operatori booleani */

let eta = 20;
let patente = true;
let abbonamento = false;


/*condizione AND*/
/*entrambe devono essere vere */

if (eta >= 18 && patente === true) {
    console.log("puoi guidare l'auto");

}


// condizione or(||)

if (eta < 18 || abbonamento === true) {
    console.log("Hai uno sconto speciale");
}


/*condizione not */
if (!abbonamento) {
    console.log("non hai un abbonamento attivo")
}


/*condizione complessa */

if ((eta >= 18 && patente) || abbonamento) {
    console.log("accesso consetito")
} else {
    console.log("accesso negato")
}




/*switch e case */

let giorno = 2;

switch (giorno) {
    case 1:
        console.log("Lunedi 1");
        break;
    case 2:
        console.log("Martedi");
        break;
    case 3:
        console.log("Mercoledi");
        break;
    default:
        console.log(" giorno non valaido");
    } 
    



    // nello switch tipo e valore devono coincidere
    // non possiamo avere condizoni come case, ma dentro essi possiamo usare blocchi if


/*  fall-throug-cascata  */

let valore = 2;

switch(valore){
    
}

