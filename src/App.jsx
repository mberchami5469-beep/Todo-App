import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [taches, setTaches] = useState([]);
  const [texte, setTexte] = useState("");

  function ajouterTache() {
    if (texte === "") return;
    const nouvelleTache = { id: Date.now(), titre: texte, done: false };
    setTaches([...taches, nouvelleTache]);
    setTexte("");
  }

  function supprimerTache(id) {
    setTaches(taches.filter((t) => t.id !== id));
  }

  function cocherTache(id) {
    setTaches(
      taches.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="ajout">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
        />
        <button onClick={ajouterTache}>Ajouter</button>
      </div>

      <ul>
        {taches.map((t) => (
          <TodoItem
            key={t.id}
            tache={t}
            onSupprimer={supprimerTache}
            onCocher={cocherTache}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
