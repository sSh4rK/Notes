import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null);

  const fetchNotes = async () => {
    const response = await fetch("/notes");
    const result = await response.json();
    setNotes(result);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <aside className="Side">
        {notes &&
          notes.map((note) => <div className="Note-title">{note.title}</div>)}
      </aside>
      <main className="Main"></main>
    </>
  );
}

export default App;
