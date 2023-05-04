import React from "react";
import { Link } from "react-router-dom";

export default function Notes({ notes, deleteNote }) {
    if (!notes) {
        return <div>Loading...</div>;
    }

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            deleteNote(id);
        }
    };

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <Link to={`/notes/${note.id}`}>{note.title}</Link>
                        <button onClick={() => handleDelete(note.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <Link to="/create-note">Create Note</Link>
        </div>
    );
}
