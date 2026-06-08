import React, { useState, useEffect } from 'react';
import axios from 'axios';

// =========================================================
// 1. COMPONENTE PADRE
// =========================================================
export default function JsonplaceholderGet() {
  const [posts, setPosts] = useState([]);
  const [inputsForm, setInputsForm] = useState({ title: "", body: "", userId: 1 });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((risposta) => {
        setPosts(risposta.data);
      })
      .catch((err) => console.error("Errore nella GET con Axios:", err));
  }, []);

  const gestisciCambioInput = (e) => {
    const { name, value } = e.target;
    // Uniformato il nome della funzione in setInputsForm
    setInputsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const aggiungiNuovoPostInLista = (nuovoPost) => {
    setPosts((prevPosts) => [nuovoPost, ...prevPosts]);
    // Uniformato il nome della funzione in setInputsForm
    setInputsForm({ title: "", body: "", userId: 1 });
  };

  // AGGIUNTO IL RETURN DEL PADRE (Mancava completamente!)
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Nuovo Post</h2>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "10px", background: "#eee", padding: "15px" }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Titolo" 
          value={inputsForm.title} 
          onChange={gestisciCambioInput} 
        />
        <textarea 
          name="body" 
          placeholder="Contenuto" 
          value={inputsForm.body} 
          onChange={gestisciCambioInput} 
        />
        <input 
          type="number" 
          name="userId" 
          value={inputsForm.userId} 
          onChange={gestisciCambioInput} 
        />
        
        <BottoneInvia datiForm={inputsForm} onPostSuccess={aggiungiNuovoPostInLista} />
      </form>

      <h2>Lista Post</h2>
      {/* Spostato il .map() nel flusso del rendering per mostrare i post */}
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

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