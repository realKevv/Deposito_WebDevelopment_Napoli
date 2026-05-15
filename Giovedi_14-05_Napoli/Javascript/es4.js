let a = 10;
let b = 5;

let somma = a + b;

let differenza = a - b;

let prodotto = a * b;
 
let divisione = a / 2;

let uguale = ( a == "10");
let strettamenteUguale = ( a === "10"); //falso tipo diverso
let maggiore = (a > b) 

let condizione = (a > 5 && b < 10); // true
let alternativa = (a < b || b < 10);
let negazione = !(a > b); //true

let x = 10
x += 5; // x = x + 5 -> 15


console.log(somma, uguale, strettamenteUguale, condizione);


const prompt = require("prompt-sync")();

let nome = prompt("inserisci il nome:  ")

console.log("ciao " + nome)

