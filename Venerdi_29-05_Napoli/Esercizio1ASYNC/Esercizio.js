// 1. CALLBACK
function invertiStringaAsincrona(testo, callback) {
    setTimeout(() => {
        const testoMaiuscolo = testo.toUpperCase();
        callback(testoMaiuscolo);
    }, 1500);
}

invertiStringaAsincrona("javascript", (risultato) => {
    console.log("Punto 1 (Callback):", risultato);
});


// 2 & 3. PROMISE (Con .then e .catch)
function invertiStringaPromise(testo) {
    return new Promise((resolve, reject) => {
        if (testo.trim() === "") {
            reject("errore testo vuoto");
            return;
        }

        setTimeout(() => {
            const testoMaiuscolo = testo.toUpperCase();
            resolve(testoMaiuscolo);
        }, 1500);
    });
}

invertiStringaPromise("promise mantenuta")
    .then((risultato) => {
        console.log("Punto 3 (Risultato con then):", risultato);
    })
    .catch((errore) => {
        console.error("Punto 3 (Errore nella promise):", errore);
    });


// 4. ASYNC / AWAIT 
async function ConversioneStringa(testo) {
    try {
        console.log("Punto 4: Avvio timer e checkTesto...");
        const risultato = await new Promise((resolve, reject) => {

            if (testo.trim() === "") {
                reject("il testo è vuoto");
                return;
            }

            setTimeout(() => {
                const testoMaiuscolo = testo.toUpperCase(); 
                resolve(testoMaiuscolo);                     
            }, 1500);
        });
        
        console.log("Punto 4 (Risultato async await):", risultato);
    } catch (errore) {
        console.error("Punto 4: Qualcosa è andato storto ->", errore);
    } 
}

// Test del blocco async await
ConversioneStringa("Con async await");