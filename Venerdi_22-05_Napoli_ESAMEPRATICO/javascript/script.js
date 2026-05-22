const inputRicerca = document.getElementById('inputRicerca');
// Recupero le schede dei cani tramite la loro classe
const schedeCani = document.querySelectorAll('.scheda-cane');

if (inputRicerca) {
    // ascolta eventi
    inputRicerca.addEventListener('keyup', function() {
        const testoDigitato = inputRicerca.value.toLowerCase();

        // itero in ciascuna scheda di cane trovata nella griglia 
        schedeCani.forEach(function(scheda) {
            // Trovo il tag h2 che contiene il nome del cane
            const nomeCane = scheda.querySelector('.titolo-cane h2').textContent.toLowerCase();

            // Controllo se il nome del cane contiene i caratteri all'interno della barra
            if (nomeCane.includes(testoDigitato)) {
                // Se c'è una corrispondenza, la scheda rimane visibile
                scheda.style.display = 'block';
            } else {
                // altrimenti nascondo la scheda dalla griglia
                scheda.style.display = 'none';
            }
        });
    });
}



//aggiunta validazoine nel form
const moduloContatti = document.querySelector(".form-bruttino");

if (moduloContatti) {
    moduloContatti.addEventListener("submit", function(event) {
        // Blocco il caricamento automatico della pagina
        event.preventDefault();

        // Prendo il valore del campo nome
        const nomeUtente = document.getElementById("nome").value;
        alert("Messaggio inviato con successo! Grazie " + nomeUtente);

        // Svuoto i campi del form
        moduloContatti.reset();
    });
}
