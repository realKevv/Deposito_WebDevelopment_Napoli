import { useState } from "react";
import "./App.css";
import Contatore from "./Components/Contatore/Contatore";
import { TaskFilter } from "./Components/TaskFilter/TaskFilter";

function App() {
  const [lastAction, setLastAction] = useState("Nessuna");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Comprare il pane", completed: false },
    { id: 2, title: "Fare la spesa", completed: true },
    { id: 3, title: "Pulire la casa", completed: false },
  ]);
  const [nuovoTesto, setNuovoTesto] = useState("");
  const [showOnlyPending, setShowOnlyPending] = useState(false);



const aggiungiTask = () => {
  if (nuovoTesto.trim() === "") return;

  const nuovaTask = {
    id: Date.now(), // Genera un ID unico basato sul timestamp
    title: nuovoTesto,
    completed: false,
  };

  setTasks([...tasks, nuovaTask]);
  
  setNuovoTesto("");
}
  const handleAction = (type, value) => {
    setLastAction(`${type} con valore ${value}`);
  };

  return (
    <>
      <div className="event-box">
        <p>Ultimo click: {lastAction}</p>
        {/* Avvolgiamo la funzione in una callback anonima per ritardare l'avvio */}
        <button onClick={() => handleAction("Azione A", 100)}>Azione 1</button>
        <button onClick={() => handleAction("Azione B", 200)}>Azione 2</button>
      </div>

      {/* Richiamiamo il componente Contatore come tag JSX */}
      <Contatore />

    <div>
      <h2>Gestione Attività</h2>

      <div style ={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={nuovoTesto}
          onChange={(e) => setNuovoTesto(e.target.value)}
          placeholder="Nuova attività"
        />

        <button onClick={aggiungiTask}>Aggiungi task</button>

      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowOnlyPending(!showOnlyPending)}>
          {showOnlyPending ? "Mostra tutte le attività" : "Mostra solo attività pendenti"}
        </button>
      </div>


      <TaskFilter tasks={tasks} showOnlyPending={showOnlyPending} />
    </div>


    </>
  );
}

export default App;
