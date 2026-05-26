//senza server

const gestioneTesto = require("./GestioneTesto");
const prompt = require('prompt-sync')();



const frase = prompt('Inserisci una frase: ');
const lettera = prompt('Inserisci la lettera da cercare: ');


const fraseMaiuscola = gestioneTesto.TestoMaiuscolo(frase);
const numeroCaratteri = gestioneTesto.contaCaratteri(frase);
const CheckLettera = gestioneTesto.testoIncludes(frase, lettera);


console.log(`testo originale: ${frase}`);
console.log(`testo in maiuscolo: ${fraseMaiuscola}`);
console.log(`numero di caratteri: ${numeroCaratteri}`);

const risultatoLettera = CheckLettera ? "si è presente" : "no non è presente";
console.log(`risultato del controllo della lettera ${lettera}: ${risultatoLettera} `);
