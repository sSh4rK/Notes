import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Navbar from "./components/Navbar";

function App() {
    const [notes, setNotes] = useState(null);

    const fetchNotes = async () => {
        const response = await fetch("/notes");
        const data = await response.json();
        setNotes(data);
    };

    const addNote = async (note) => {
        const response = await fetch("/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
        const data = await response.json();
        setNotes([...notes, data]);
    };

    const deleteNote = async (id) => {
        await fetch(`/notes/${id}`, {
            method: "DELETE",
        });
        setNotes(notes.filter((note) => note.id !== id));
    };

    const updateNote = async (id, note) => {
        const response = await fetch(`/notes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
        const data = await response.json();
        setNotes(
            notes.map((note) => (note.id === id ? { ...note, ...data } : note))
        );
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    console.log({ notes });

    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/notes" element={<Notes />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
