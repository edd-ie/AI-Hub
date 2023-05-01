import './chat.css'
import Aside from './chatAside'
import Section from './chatSect';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function Chat(){

    return(
        <div className="chat">
            <Aside/>
            <Section/>
        </div>
    )
}