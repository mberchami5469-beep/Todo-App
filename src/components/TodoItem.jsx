function TodoItem({ tache, onSupprimer, onCocher }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={tache.done}
        onChange={() => onCocher(tache.id)}
      />
      <span className={tache.done ? "done" : ""}>{tache.titre}</span>
      <button onClick={() => onSupprimer(tache.id)}>Supprimer</button>
    </li>
  );
}

export default TodoItem;
