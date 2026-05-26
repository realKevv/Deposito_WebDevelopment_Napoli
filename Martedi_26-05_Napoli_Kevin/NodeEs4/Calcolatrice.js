function calcolaTutto() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);


    const operazione = document.getElementById('operazione').value;


    let totale = 0;


    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('risultato').innerText = "inserisci due numeri validi"
        return
    }

    switch (operazione) {

        case 'somma':
            totale = num1 + num2;
            break;

        case 'sottrazione':
            totale = num1 - num2;
            break;

        case 'moltiplicazione':
            totale = num1 * num2;
            break;

        case 'divisione':
            if (num2 === 0) {
                document.getElementById('risultato').innerText = "Errore: non puoi dividere per zero!";
                return;
            }
            totale = num1 / num2;
            break;
    }
    document.getElementById('risultato').innerText = "il totale è " + totale;

}

