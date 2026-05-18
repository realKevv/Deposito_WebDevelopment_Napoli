

const prompt = require("prompt-sync")();

let ruolo1 = "";
let ruolo2 = "";
let ruolo3 = "";

ruolo1 = prompt("Inserisci il primo ruolo: ");
ruolo2 = prompt("Inserisci il secondo ruolo: ");
ruolo3 = prompt("Inserisci il terzo ruolo: ");


switch (ruolo1) {
    case "player":
        console.log("ACCESSO PLAYER")
        break;

    case "moderator":
        console.log("accesso MODERATOR")
        break;

    case "admin":
        console.log("accesso admin")
        break;

    default:
        console.log("accesso non valido");
}

switch (ruolo2) {
    case "player":
        console.log("ACCESSO PLAYER")
        break;

    case "moderator":
        console.log("accesso MODERATOR")
        break;

    case "admin":
        console.log("accesso admin")
        break;

    default:
        console.log("accesso non valido");
}

switch (ruolo3) {
    case "player":
        console.log("ACCESSO PLAYER")
        break;

    case "moderator":
        console.log("accesso MODERATOR")
        break;

    case "admin":
        console.log("accesso admin")
        break;

    default:
        console.log("accesso non valido");
}



// if (
//     (ruolo1 === "player" || ruolo2 === "player" || ruolo3 === "player")
//     &&
//     (ruolo1 === "moderator" || ruolo2 === "moderator" || ruolo3 === "moderator")
// ) {
//     console.log("hai sia un pplayer che un moderator")
// }

// if (
//     ruolo1 === "admin" ||
//     ruolo2 === "admin" ||
//     ruolo3 === "admin"
// ) {

//     console.log("Hai privilegi ADMIN.");

// }


