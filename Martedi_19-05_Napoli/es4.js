

//creazione oggetto

let persona = {
    nome: "Mario",
    eta: 30,

}

console.log(persona.nome);
console.log(persona["eta"]);

//modifica proprietà

persona.eta = 31;

persona.citta = "Milano";

delete persona.citta;


let chiavi = Object.keys(persona);
let valori = Object.values(persona);
let entries = Object.entries(persona);

console.log(chiavi);
console.log(valori);
console.log(entries);