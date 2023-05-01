import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return (
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
        </div>
    )
}