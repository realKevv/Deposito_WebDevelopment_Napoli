
const fs = require('fs');


function mostraMessaggio(messaggio) {

        const contenuto = fs.readFileSync(messaggio, 'utf-8');
        return contenuto;
}



module.exports = {

    mostraMessaggio
}

