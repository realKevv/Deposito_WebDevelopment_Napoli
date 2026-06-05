import React, { useState } from "react";
import axios from "axios";

export default function CreatePost({ onPostCreato }) {
  const [createdPost, setCreatedPost] = useState(null);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: 'Contenuto generico di test',
        userId: 1,
      });
      
      setCreatedPost(response.data);

      if (onPostCreato) {
        onPostCreato(response.data);
      }
      
      setTitle('');
    } catch (error) {
      console.error("Errore durante la creazione del post:", error);
    }
  };

  return (
    <div>
      <h2>Crea un nuovo post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titolo del post"
          required
        />
        <button type="submit">Crea Post</button>
      </form>

      {createdPost && (
        <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
          <p>valore inserito all'interno del DB: </p>
          <pre>{JSON.stringify(createdPost, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}