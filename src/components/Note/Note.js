import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import "./Note.css";

const Note = ({ OnSubmit }) => {
    const { id } = useParams();
    const [note, setNote] = useState(null);

    const fetchNote = useCallback(async () => {
        const response = await fetch(`/notes/${id}`);
        const result = await response.json();
        setNote(result);
    }, [id]);

    useEffect(() => {
        fetchNote();
    }, [id, fetchNote]);

    const updateNote = async (event) => {
        event.preventDefault();
        await fetch(`/notes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
        OnSubmit();
    };

    const deleteNote = async (event) => {
        event.preventDefault();
        await fetch(`/notes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
        OnSubmit();
    };

    return (
        <form className="Form">
            <input
                className="Note-editable Note-title"
                type="text"
                value={note ? note.title : ""}
                onChange={(event) => {
                    setNote({ ...note, title: event.target.value });
                }}
            />
            <textarea
                className="Note-editable Note-content"
                value={note ? note.content : ""}
                onChange={(event) => {
                    setNote({ ...note, content: event.target.value });
                }}
            />
            <div className="Note-actions ">
                <button className="Button" onClick={updateNote}>
                    Enregistrer
                </button>
                <button className="Button" onClick={deleteNote}>
                    Supprimer
                </button>
            </div>
        </form>
    );
};

export default Note;
