
export function somma(numeri) {
    let totale = 0;
    for (let i = 0; i < numeri.length; i++) {
        totale = totale + numeri[i];
    }
    return totale;
}

export function sottrazione(numeri) {
    let totale = numeri[0]; 
    for (let i = 1; i < numeri.length; i++) { 
        totale = totale - numeri[i];
    }
    return totale; 
}

export function moltiplicazione(numeri) {
    let totale = 1; 
    for (let i = 0; i < numeri.length; i++) {
        totale = totale * numeri[i]; 
    }
    return totale; 
}

export function divisione(numeri) {
    let risultato = numeri[0];
    for (let i = 1; i < numeri.length; i++) {
        if (numeri[i] === 0) {
            return "non puoi dividere per zero";
        }
        risultato = risultato / numeri[i];
    }
    return risultato;
}