import React, { useState, useEffect } from "react";
import axios from "axios";
import GetPosts from "./components/ComponentHTTP/GetPosts";
import CreatePost from "./components/ComponentHTTP/CreatePost";
import DeletePost from "./components/ComponentHTTP/DeletePost";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [idDaEliminare, setIdDaEliminare] = useState(1);

  useEffect(() => {
    const fetchIniziale = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/posts/1"),
          axios.get("https://jsonplaceholder.typicode.com/posts/2"),
          axios.get("https://jsonplaceholder.typicode.com/posts/3")
        ]);
        setPosts([res1.data, res2.data, res3.data]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchIniziale();
  }, []);

  const aggiungiPostAlloSchermo = (nuovoPost) => {
    // Mantengo il fix per evitare l'errore rosso delle chiavi duplicate!
    const postConIdUnico = { ...nuovoPost, id: Date.now() };
    setPosts([...posts, postConIdUnico]);
  };

  const rimuoviPostDalloSchermo = (id) => {
    const rimasti = posts.filter((post) => post.id !== id);
    setPosts(rimasti);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>La mia App React Dinamica</h1>
      <hr />

      <GetPosts listaPost={posts} />
      <hr />

      <CreatePost onPostCreato={aggiungiPostAlloSchermo} />
      <hr />

      <div style={{ background: "#f4f4f4", padding: "15px", borderRadius: "5px" }}>
        <h3>Scegli quale ID eliminare:</h3>
        <input
          type="number"
          value={idDaEliminare}
          onChange={(e) => setIdDaEliminare(Number(e.target.value))}
          style={{ width: "60px", padding: "5px", marginRight: "10px" }}
        />
        
        <DeletePost 
          postId={idDaEliminare} 
          onCancellazioneSuccesso={rimuoviPostDalloSchermo} 
        />
      </div>
    </div>
  );
}