const prompt = require("prompt-sync")();

//CREAZIONE DELLE FUNZIONI
function calcolaValoreMagazzino(catalogo) {
    if (catalogo.length === 0) return 0;

    let totaleValore = 0;

    for (let i = 0; i < catalogo.length; i++) {
        let prodotto = catalogo[i];

        let prezzoSicuro = prodotto.prezzo || 0;
        let quantitaSicura = prodotto.quantita || 0;

        let valoreProdotto = prezzoSicuro * quantitaSicura;
        totaleValore = totaleValore + valoreProdotto;
    }
    return totaleValore;
}


function prodottoPiuCostoso(catalogo) {
    if (catalogo.length === 0) {
        return "Nessun prodotto";
    }

    let PiuCostoso = catalogo[0];

    for (let i = 1; i < catalogo.length; i++) {
        // se manca il prezzo di un prodotto facciamo finta sia 0 per evitare crash
        let prezzoCorrente = catalogo[i].prezzo || 0;
        let prezzoReCorrente = PiuCostoso.prezzo || 0;

        if (prezzoCorrente > prezzoReCorrente) {
            PiuCostoso = catalogo[i];
        }
    }
    return PiuCostoso;
}


function prodottiFiltrati(catalogo) {
    // se il catalogo è vuoto  restituiamo un array vuoto
    if (catalogo.length === 0) return [];

    // let prodottiDisponibili = [];

    // for(let i = 0; i < catalogo.length; i++) {
    //     if (catalogo[i].quantita > 0) {
    //         prodottiDisponibili.push(catalogo[i]);
    //     }
    // }
    // return prodottiDisponibili;
    // OPPURE

    //controlliamo che quantita esista con || 0
    return catalogo.filter(prodotto => (prodotto.quantita || 0) > 0);
}

function aggiungiProprietaDisponibile(catalogo) {
    // se il catalogo è vuoto, restituiamo un array vuoto
    if (catalogo.length === 0) return [];

    for (let i = 0; i < catalogo.length; i++) {
        // se manca la quantità, facciamo finta sia 0
        let quantitaSicura = catalogo[i].quantita || 0;

        if (quantitaSicura > 0) {
            catalogo[i].disponibile = true;
        } else {
            catalogo[i].disponibile = false;
        }
    }
    return catalogo;
}


function prendiSoloNomi(catalogo) {
    if (catalogo.length === 0) return [];

    let nomiProdotti = [];

    for (let i = 0; i < catalogo.length; i++) {
        // se manca la proprietà nome, mettiamo un testo di riserva
        let nomeSicuro = catalogo[i].nome || "Prodotto senza nome";
        nomiProdotti.push(nomeSicuro);
    }
    return nomiProdotti;
}

function aggiungiProdotto(catalogo) {
    let nome = prompt("Inserisci il nome del prodotto:");
    let prezzo = Number(prompt("Inserisci il prezzo del prodotto:"));
    let quantita = Number(prompt("Inserisci la quantità del prodotto:"));

    if (nome.trim() === "" || isNaN(prezzo) || isNaN(quantita)) {
        console.log("Dati non validi.");
        return;
    }

    let nuovoProdotto = {
        nome: nome,
        prezzo: prezzo,
        quantita: quantita
    };
    catalogo.push(nuovoProdotto);
    console.log("Prodotto aggiunto con successo.");
}



//db
let catalogoProdotti = [];
let uscita = false;


while (uscita === false) {
    console.log(" MENU GESTIONALE ");
    console.log("1 - Aggiungi prodotto");
    console.log("2 - Mostra intero catalogo");
    console.log("3 - Valore totale magazzino");
    console.log("4 - Prodotto più costoso");
    console.log("5 - Prodotti disponibili");
    console.log("6 - Array solo nomi");
    console.log("Scrivi ESCI per terminare");

    let scelta = prompt("Scelta: ");

    if (scelta.toLowerCase() === "esci") {
        uscita = true;
        console.log("Programma terminato");

    } else if (scelta === "1") {
        aggiungiProdotto(catalogoProdotti);

    } else if (scelta === "2") {
        console.log("CATALOGO PRODOTTI");
        console.log(catalogoProdotti);

    } else if (scelta === "3") {
        let valoreTotale = calcolaValoreMagazzino(catalogoProdotti);
        console.log("Valore totale del magazzino è €:", valoreTotale);

    } else if (scelta === "4") {
        let prodottoCostoso = prodottoPiuCostoso(catalogoProdotti);
        if (typeof prodottoCostoso === "string") {
            console.log("Il prodotto più costoso è:", prodottoCostoso);
        } else {
            console.log("Il prodotto più costoso è:", prodottoCostoso.nome || "Senza nome", "al prezzo di €", prodottoCostoso.prezzo || 0);
        }

    } else if (scelta === "5") {
        // Applica le modifiche alle schede e filtra
        let catalogoConDisponibilita = aggiungiProprietaDisponibile(catalogoProdotti);
        let prodttiDisponibili = prodottiFiltrati(catalogoProdotti);
        console.log("I prodotti disponibili sono:", prodttiDisponibili);

    } else if (scelta === "6") {
        let nomiProdotti = prendiSoloNomi(catalogoProdotti);
        console.log("Nomi dei prodotti nel catalogo:", nomiProdotti);

    } else {
        console.log("Scelta non valida");
    }
}