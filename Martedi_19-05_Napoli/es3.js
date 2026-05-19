//try catch finally


try {
    let risultato = 10 / 0;
    console.log(risultato);
} catch (errore) {
    console.log("C'è stato un errore: " + errore.message);
}


//finally viene eseguito sempre, sia in caso di errore che in caso di successo

try {
    console.log("esecuzione...");
 } catch (errore) {
    console.log("errore")
} finally {
    console.log("operazione terminata");
}


function controllaEta(eta){
    if(eta < 18){
        throw new Error("Non sei maggiorenne");
    }
    return "Benvenuto!";
}

try {
    console.log(controllaEta(18));
} catch (e) {
    console.log(e.message);
}