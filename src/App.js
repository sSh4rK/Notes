import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Note from "./components/Note/Note";

function App() {
    const [notes, setNotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const location = useLocation();

    const fetchNotes = async () => {
        const response = await fetch("/notes");
        const result = await response.json();
        setNotes(result);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const addNote = async () => {
        const response = await fetch(`/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: "", content: "" }),
        });
        const result = await response.json();
        setNotes([...notes, result]);
    };

    const filteredNotes = notes
        ? notes.filter((note) => {
              return note.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
          })
        : [];

    return (
        <>
            <aside className="Side">
                <div>
                    <input
                        type="text"
                        placeholder="Recherche par titre"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {isLoading ? (
                    "Chargement..."
                ) : filteredNotes.length ? (
                    filteredNotes.map((note) => (
                        <Link
                            to={`/notes/${note.id}`}
                            className={`Note-link ${
                                location.pathname === `/notes/${note.id}`
                                    ? "active"
                                    : ""
                            }`}
                            key={note.id}
                        >
                            {note.title}
                        </Link>
                    ))
                ) : (
                    <div>Aucune note trouvée</div>
                )}
                <button onClick={addNote}>Ajouter une note</button>
            </aside>
            <main className="Main">
                <Routes>
                    <Route
                        path="/notes/:id"
                        element={<Note OnSubmit={fetchNotes} />}
                    />
                </Routes>
            </main>
        </>
    );
}

export default App;
