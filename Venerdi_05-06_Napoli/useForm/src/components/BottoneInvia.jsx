export function BottoneInvia({ datiForm, onPostSuccess }) {

  const gestisciInvioPost = async () => {
    if (!datiForm.title || !datiForm.body) {
      alert("Per favore, compila tutti i campi.");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: datiForm.title,
          body: datiForm.body,
          userId: Number(datiForm.userId)
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const NuovoPostCreato = await response.json();
      console.log("Post creato con successo:", NuovoPostCreato);
      onPostSuccess(NuovoPostCreato);
      alert("Post creato con successo!");
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
    }
  };

  // Inserito il return dentro i confini della funzione del componente Figlio
  return (
    <button 
      type="button"
      onClick={gestisciInvioPost}
      style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer" }}
    >
      Invia Nuovo Post
    </button>
  );
}