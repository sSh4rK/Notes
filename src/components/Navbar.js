import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <aside className="Side">
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
        </aside>
    );
}
