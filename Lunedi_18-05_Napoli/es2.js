
const prompt = require("prompt-sync")();

// Variabili
let menu = "";
let e1 = "";
let e2 = "";


menu = prompt("scegli un panino: hamburger, pizza, piadina:")


switch (menu) {

    case "hamburger":
        console.log("hai scelto un hamburger")

        e1 = prompt("Aggiungi un extra: ");
        e2 = prompt("Aggiungi un extra2: ");

        console.log("ordine finale: "+ menu)
        console.log("ordine finale con " + e1 + " e " + e2);

        break;

    case "pizza":
        console.log("hai scelto una pizza")

        e1 = prompt("Aggiungi un extra: ");
        e2 = prompt("Aggiungi un extra2: ");

        console.log("ordine finale: " + menu)
        console.log("ordine finale con " + e1 +  "e " + e2);

        break;

    case "piadina":
        console.log("hai scelto una piadina")

        e1 = prompt("Aggiungi un extra: ");
        e2 = prompt("Aggiungi un extra2: ");

        console.log("ordine finale: " + menu)
        console.log("ordine finale con " + e1 + " e  " + e2);

        break;


    default:
        console.log("ERRORE")
}