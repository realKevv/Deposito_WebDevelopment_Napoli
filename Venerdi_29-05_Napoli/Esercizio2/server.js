const express = require('express');
const app = express();
const PORT = 5000;


app.use(express.json());

const videogiochi = [
    { id: 1, titolo: "The Legend of Zelda: Tears of the Kingdom", piattaforma: "Nintendo Switch" },
    { id: 2, titolo: "Elden Ring", piattaforma: "PlayStation 5" },
    { id: 3, titolo: "Cyberpunk 2077", piattaforma: "PC" },
    { id: 4, titolo: "GTA V", piattaforma: "Xbox Series X" }
];

app.get('/api/giochi', (req, res) => {
    res.status(200).json(videogiochi);
});

app.get('/api/giochi/:id', (req, res) => {
    const idRichiesto = req.params.id;
    // Usiamo Number() perché dobbiamo trasformare la stringa "3" nel numero 3 per fare il confronto (===)
    const giocoTrovato = videogiochi.find(gioco => gioco.id === Number(idRichiesto));
    if (!giocoTrovato) {
        // Rispondiamo con l'errore 404 il JSON richiesto dall'esercizio
        return res.status(404).json({ 
            error: "Risorsa non individuata nel sistema" 
        });
    }

    res.status(200).json(giocoTrovato);
});


app.listen(PORT, () => {
    console.log(`Server del Negozio di Videogiochi avviato sulla porta ${PORT} 🎮`);
});