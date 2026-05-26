const fs = require('fs');
const prompt = require('prompt-sync')();

console.log(" a - Home");
console.log(" b - Info Creatore");
console.log(" c - Mostra codice Calcolatrice HTML + JS");


const risposta = prompt("Scegli una lettera (a, b, c): ");
const input = risposta.trim().toLowerCase();

switch (input) {

    case 'a':
        console.log("HOME");
        const home = fs.readFileSync('index.html', 'utf-8');
        console.log(home);
        break;

    case 'b':
        console.log("INFO");
        const info = fs.readFileSync('info.html', 'utf-8');
        console.log(info);
        break;

    case 'c':
        console.log("CALCOLATRICE");
        const calcolatriceHTLM = fs.readFileSync('Calcolatrice.html', 'utf-8');
        console.log(calcolatriceHTLM);

    default:
        console.log("\nErrore: Inserisci solo a, b o c.");
        break;
}

