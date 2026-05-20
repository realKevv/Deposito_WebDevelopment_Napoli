
let btnCarica = document.getElementById("btnCarica");
let output = document.getElementById("output");


const databaseUtenti = [
    { id: 1, nome: "Mario Rossi", ruolo: "Admin", stato: "Attivo" },
    { id: 2, nome: "Luigi Verdi", ruolo: "Editor", stato: "Inattivo" },
    { id: 3, nome: "Giulia Bianchi", ruolo: "User", stato: "Attivo" }
];


// function attendi() {
//         return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve("Dati caricati");
//         }, 2000);
//     });
// }


// async function caricaDati() {
//     output.innerText = "Caricamento in corso...";

//     output.classList.add("loading");
//     output.classList.remove("successo");

//     try {
//         let risultato = await attendi();

//         output.innerText = risultato;

//         output.classList.remove("caricamento");
//         output.classList.add("successo");
//     } catch (error) {
//         output.innerText = "Si è verificato un errore";
//         output.style.backgroundColor = "red";
//     }

// }

// btnCarica.addEventListener("click", caricaDati);


function attendi() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (databaseUtenti.length > 0) {
                resolve(databaseUtenti);
            } else {
                reject("Database vuoto");
            }
        }, 2000);
    });
}

async function caricaDati() {
    output.innerText = "Caricamento in corso...";

    output.classList.add("caricamento");
    output.classList.remove("successo");

    try {
        let listaUtenti = await attendi();

        // 1. Svuota la scritta "Caricamento in corso..."
        output.innerHTML = ""; 

        // Per ogni "utente" dentro la "listaUtenti"
        for (let utente of listaUtenti) {

            let riga = document.createElement("li");

            riga.innerHTML = `ID: ${utente.id} - <b>${utente.nome}</b> (${utente.ruolo}) - ${utente.stato}`;

            output.appendChild(riga);
        }

        output.classList.remove("caricamento");
        output.classList.add("successo");
    } catch (error) {

        output.innerText = "Si è verificato un errore: " + error;
        output.style.backgroundColor = "red";

    }

}

btnCarica.addEventListener("click", caricaDati);