## 📄 1. Offerta Tecnica e Architettura del Progetto

separazione tra contenuti (HTML5), stile (CSS3) e comportamento (JS)

### Organizzazione dei File e delle Cartelle
- `/index.html` -> Home Page: Presentazione della missione della struttura e panoramica degli ospiti.
- `/cani.html` -> Pagina Catalogo: Galleria flessibile a due colonne per la visualizzazione dettagliata dei cani.
- `/info.html` -> Pagina Contatti: Sezione "Chi Siamo" e modulo per l'invio di messaggi da parte degli utenti.
- `/style/`
  - `tema.css` -> Stile globale del sito: contiene il reset dei tag, la palette cromatica, i font e i layout condivisi di Header (Navbar) e Footer.
  - `cani.css` -> Stile specifico per la griglia e l'impaginazione delle schede della pagina catalogo.
  - `info.css` -> Stile minimale e squadrato dedicato esclusivamente alla formattazione del modulo contatti.
- `/js/`
  - `script.js` -> Logica di programmazione per le interazioni dinamiche del portale.
- `/assets/img/` -> Cartella locale contenente le immagini dei cani e i background del sito.

---


## 🔄 2. Relazione sul Riadattamento e Utilizzo dell'IA
### Adattamento della Vecchia Struttura
Il progetto parte dal riadattamento di una vecchia struttura HTML/CSS nata per un portfolio aziendale. I blocchi principali sono stati modificati per i contenuti del rifugio:
**Cambio Contenuti:** La sezione Hero iniziale è diventata l'introduzione del sito, la griglia dei prodotti è stata modificata per contenere le schede dei cani.
Contenuti di testo generati dall'AI

## ⚙️ 3. Documentazione Funzionale degli Script (JavaScript)

Le logiche comportamentali del sito sono centralizzate nel file esterno `/js/script.js`, che viene caricato globalmente 

### Funzionalità 1: Filtro di Ricerca in Tempo Reale (`cani.html`)
- **Meccanismo:** Lo script intercetta l'elemento di input della barra di ricerca e ascolta l'evento . 
- **Logica:** Ogni volta che l'utente digita un carattere, il programma memorizza il testo, cicla tutte le schede dei cani ed estrae il testo contenuto nel tag `<h2>` (il nome del cane). Tramite il metodo `.includes()`, confronta i dati convertiti in minuscolo (`.toLowerCase()`). Se il nome corrisponde alla ricerca, la scheda resta visibile, altrimenti viene nascosta.

### Funzionalità 2: Intercettazione e Reset del Modulo Contatti (`info.html`)
- **Meccanismo:** Lo script seleziona il form di contatto tramite la classe  e si mette in ascolto dell'evento.
- **Logica:** Quando l'utente clicca sul tasto di invio, la funzione blocca  ricaricamento della pagina tramite `event.preventDefault()`. 
Successivamente preleva il valore testuale inserito nel campo `#nome`, mostra a schermo una finestra di avviso.

        To-Do List

- [x] Creazione delle 3 pagine HTML collegate (`index.html`, `cani.html`, `info.html`).
- [x] Sviluppo degli stili CSS separati e ottimizzati per ciascuna sezione della pagina.
- [x] Creazione della struttura globale della Navbar (Menu) e del Footer in `tema.css`.
- [x] Impaginazione della griglia flessibile e creazione delle card descrittive per i singoli cani.
- [x] Scrittura della logica JavaScript per il filtro di ricerca in tempo reale per nome.
- [x] Implementazione del controllo JS sul submit del form di contatto con svuotamento automatico dei campi.
- [x] Scrittura di alcuni commenti con spiegazione (HTML, CSS, JS). 

