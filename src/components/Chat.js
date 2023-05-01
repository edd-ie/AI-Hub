import './chat.css'
import React from 'react';


export default function Chat(){
    return(
        <div className="chat">
            <aside className="right-side">
                <div className="header-container">
                    <div className="header">
                        <div className="toggle-button">
                            <i className="fas fa-bars">
                                <span class="material-symbols-sharp">
                                    menu
                                </span>
                            </i>
                            <i className="fas fa-arrow-left">
                                <span class="material-symbols-sharp">
                                    arrow_back
                                </span>
                            </i>
                        </div>
                        <div className="search-box">
                            <i className="fas fa-search">
                                <span class="material-symbols-sharp">
                                    search
                                </span>
                            </i>
                            <input type="text" placeholder="Search"/>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="messages-container"></div>
        </div>
    )
}