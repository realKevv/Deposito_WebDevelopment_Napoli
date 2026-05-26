const http = require("http");
const url = require("url"); 
const functions = require("./GestioneTesto");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    // Estrae i dati dall'URL
    const query = url.parse(req.url, true).query;
    const frase = query.frase;
    const lettera = query.lettera;

    if (frase && lettera) {
        res.write(`<p>Originale: ${frase}</p>`);
        res.write(`<p>Maiuscolo: ${functions.TestoMaiuscolo(frase)}</p>`);
        res.write(`<p>Caratteri: ${functions.contaCaratteri(frase)}</p>`);
        res.write(`<p>Contiene ${lettera}: ${functions.testoIncludes(frase, lettera) ? 'Sì' : 'No'}</p>`);
        res.write('<p><a href="/">Indietro</a></p>');
    } else {
        res.write(`
            <form action="/" method="GET">
                <p>Testo: <input type="text" name="frase" required></p>
                <p>Lettera: <input type="text" name="lettera" required></p>
                <p><button type="submit">Invia</button></p>
            </form>
        `);
    }
    res.end();
});

server.listen(3000, () => console.log("Server su http://localhost:3000"));