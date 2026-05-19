const prompt = require("prompt-sync")();

//CREAZIONE DELLE FUNZIONI
function calcolaValoreMagazzino(catalogo) {
    let totaleValore = 0;

    for (let i = 0; i < catalogo.length; i++) {
        let prodotto = catalogo[i];
        let valoreProdotto = prodotto.prezzo * prodotto.quantita;
        totaleValore = valoreProdotto + valoreProdotto;
    }
    return totaleValore;
}


function prodottoPiuCostoso(catalogo) {
    let PiuCostoso = catalogo[0];

    for (let i = 1; i < catalogo.length; i++) {
        if (catalogo[i].prezzo > PiuCostoso.prezzo) {
            PiuCostoso = catalogo[i];
        }
    }
    return PiuCostoso;
}


function prodottiFiltrati(catalogo) {
    // let prodottiDisponibili = [];

    // for(let i = 0; i < catalogo.length; i++) {
    //     if (catalogo[i].quantita > 0) {
    //         prodottiDisponibili.push(catalogo[i]);
    //     }
    // }
    // return prodottiDisponibili;
    // OPPURE

    return catalogo.filter(prodotto => prodotto.quantita > 0);

    let prodottiDisponibili = prodottiFiltrati(catalogoProdotti);
}

function aggiungiProprietaDisponibile(catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
        if (catalogo[i].quantita > 0) {
            catalogo[i].disponibile = true;
        } else {
            catalogo[i].disponibile = false;
        }
    }
    return catalogo;
}


function prendiSoloNomi(catalogo) {
    let nomiProdotti = [];

    for (let i = 0; i < catalogo.length; i++) {
        nomiProdotti.push(catalogo[i].nome);
    }
    return nomiProdotti;
}

//db
let catalogoProdotti = [
    {
        nome: "Mela",
        prezzo: 1.5,
        quantita: 10
    },
    {
        nome: "Pane",
        prezzo: 2.0,
        quantita: 0
    },
    {
        nome: "Latte",
        prezzo: 1.2,
        quantita: 5
    },
    {
        nome: "Uova",
        prezzo: 0.2,
        quantita: 30
    },
    {
        nome: "Formaggio",
        prezzo: 3.0,
        quantita: 2
    }
];


//richiamo delle funzioni e stampe fnali
console.log("CATALOGO PRODOTTI");
let valoreTotale = calcolaValoreMagazzino(catalogoProdotti);
console.log("Valore totale del magazzino è €:", valoreTotale);
let prodottoCostoso = prodottoPiuCostoso(catalogoProdotti);
console.log("Il prodotto più costoso è:", prodottoCostoso.nome, "al prezzo di €", prodottoCostoso.prezzo);
let prodttiDisponibili = prodottiFiltrati(catalogoProdotti);
console.log("I prodotti disponibili sono:", prodttiDisponibili);
let catalogoConDisponibilita = aggiungiProprietaDisponibile(catalogoProdotti);
console.log("Catalogo con proprietà 'disponibile':", catalogoConDisponibilita);
let nomiProdotti = prendiSoloNomi(catalogoProdotti);
console.log("Nomi dei prodotti nel catalogo:", nomiProdotti);
