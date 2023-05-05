import './chat.css'
import Aside from './chatAside'
import Section from './chatSect';
import React from 'react';


export default function Chat(){

    return(
        <div className="chat">
            <Aside/>
            <Section/>
        </div>
    )
}