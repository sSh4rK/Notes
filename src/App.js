import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Note from "./components/Note/Note";

function App() {
    const [notes, setNotes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <>
            <aside className="Side">
                {isLoading ? (
                    "Chargement..."
                ) : notes ? (
                    notes.map((note) => (
                        <Link
                            to={`/notes/${note.id}`}
                            className="Note-link"
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
