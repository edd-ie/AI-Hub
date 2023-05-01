import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
            </div>
            HOME
        </div>
    )
}