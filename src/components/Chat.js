import './chat.css'
import React, { useState, useEffect } from 'react';


export default function Chat(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
 
    function handleBack(){  
        let header = document.querySelector('.header');      
        let list = header.attributes.class.value.split(' ');
        
        if(list.includes('focus')){
            header.attributes.class.value = 'header';
        }
    
    }

    function handleSearchFocus(){
        let header = document.querySelector('.header');
        header.attributes.class.value += ' focus';
        
    }

    // Update the current time every second
    let currentTime = setInterval(function() {
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    console.log(time);
    }, 1000);

    return(
        <div className="chat">
            <aside className="right-side">
                <div className="header-container">
                    <div className="header">
                        <div className="toggle-button">
                            <i className="fas fa-bars">
                                <span className="material-symbols-sharp">
                                    menu
                                </span>
                            </i>
                            <i className="fas fa-arrow-left" onClick={handleBack}>
                                <span className="material-symbols-sharp">
                                    arrow_back
                                </span>
                            </i>
                        </div>
                        <div className="search-box">
                            <i className="fas fa-search">
                                <span className="material-symbols-sharp">
                                    search
                                </span>
                            </i>
                            <input type="text" placeholder="Search" onFocus={handleSearchFocus}/>
                        </div>
                    </div>
                </div>
                
                <div className="body-container">
                    <div className="chat-list">
                        <div className="chat-box" id="Msg">
                            <div className="chat-img">
                                <img src="../../public/images/icon1.jpg" alt=""/>
                            </div>
                            <div className="chat-details">
                                <h3>AI chat</h3>
                                <span>{time}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            
        </div>
    )
}