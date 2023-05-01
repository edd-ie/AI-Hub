import React from "react";


export default function Section(){
    return(
        <section className="content">
                <div className="container" id="chatBox">
                    <div className="content-header">
                        <div className="image">
                            <img src={require("../images/icon.jpg")} alt=""/>
                        </div>
                        <div className="details">
                            <h3>AI_chat</h3>
                            <span>Online</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-phone-alt">
                                <span className="material-symbols-sharp">
                                    call
                                </span>
                            </i>
                            <i className="fas fa-search">
                                <span className="material-symbols-sharp">
                                    search
                                </span>
                            </i>
                            <i className="fas fa-ellipsis-v">
                                <span className="material-symbols-sharp">
                                    more_vert
                                </span>
                            </i>
                        </div>
                    </div>
                    <div className="chat-container">
                        <div className="chat-msg">
                            <p>How to make website using html and css?</p>
                            <span className="time">06:04 PM</span>
                        </div>
                    </div>

                    <div className="message-box">
                        <div className="message-content">
                            <i className="far fa-smile">
                                <span class="material-symbols-sharp">
                                    mood
                                </span>
                            </i>
                            <input type="text" placeholder="Message"/>
                            <i className="fas fa-paperclip">
                                <span class="material-symbols-sharp">
                                    attach_file
                                </span>
                            </i>
                        </div>
                        <div className="micro">
                            <i classNameName="fas fa-microphone">
                                <span class="material-symbols-sharp">
                                    send
                                </span>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
    )
}