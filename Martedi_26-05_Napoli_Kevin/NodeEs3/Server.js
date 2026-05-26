const modulo = require('./Modulo');
const http = require('http');

/*testo da terminale*/
const testo = modulo.mostraMessaggio('messaggio.txt');
console.log("Il contenuto del txt e':  \n", testo, "\n");


const server = http.createServer((req, res) => {

    if(req.url === '/' || req.url === '/html'){
        const contenutoHtml = modulo.mostraMessaggio('index.html');
        res.writeHead(200, {'content-type' : 'text/html; charset=utf-8'});
        res.write(contenutoHtml);
        res.end();
    }

    else if (req.url === '/style.css') {
        const contenutoCSS = modulo.mostraMessaggio('style.css');

        res.writeHead(200, {'content-type' : 'text/css'});
        res.write(contenutoCSS)
        res.end();
    
    } else {
        res.writeHead(400, {'content-type' : 'text/plain; charset=utf-8'})
        res.end("pagina non trovata.")


    }

});


server.listen(3000, () => {
    console.log(`Server web attivo su http://localhost:3000`);
});


 const Paghtml = modulo.mostraMessaggio('index.html');
 console.log("il contenuto dell'HTML e':  ", Paghtml);

