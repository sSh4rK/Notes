import React from "react";
import { useParams } from "react-router-dom";

function NoteDetail({ notes }) {
    const { id } = useParams();
    const note = notes.find((note) => note.id === parseInt(id));

    return (
        <div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
        </div>
    );
}

export default NoteDetail;
