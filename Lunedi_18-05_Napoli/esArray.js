

// /* - ARRAY - */


// let numeri = [ 1, 2, 3, 4, 5, 6];

// console.log(numeri[0]);



// /*aggiunta di elementi in coda */
// numeri.push(7);

// /*aggiunge all'inizio*/
// numeri.unshift(0);


// /*rimozione seguendo la stessa logia di sopra */

// numeri.pop();
// numeri.shift();


// /* iterazione */

// numeri.forEach(n => console.log(n));


// /*trasformazione*/

// let doppi = numeri.map(n => n * 2);

// /*filtro*/



// let maggioriDiUno = numeri.filter( n => n > 1) 

// //ricerca

// let trovato = numeri.find(n => n === 2 );


// // lunghezza
// console.log(numeri.length)  



/*for-of itera sui valori di strutture iterabili */

let numeri = ["10", "20", "30"];


for(let valore of numeri) {
    console.log(valore);
}


//for in itera sulle proprietà di un oggetto

let persona = {nome: "Mario", eta:30 };

for (let chiave in persona) {
    console.log(chiave, persona[chiave]);
}

let parola = "cane"

for(let lettera of parola) {
    console.log(lettera);
}


for(let lettera in parola) {
    console.log(lettera);
}