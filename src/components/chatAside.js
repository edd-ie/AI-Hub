import React from 'react';
import { Link } from "react-router-dom";


export default function Aside(){
 
    function handleBack(){  
        let header = document.querySelector('.header');      
        let list = header.attributes.class.value.split(' ');
        
        let files = document.querySelector('#files');

        let list2 = files.attributes.class.value.split(' ');

        if(list.includes('focus')){
            header.attributes.class.value = 'header';
        }
    
        if(list2.includes('active')){
            files.attributes.class.value = 'files';
        }
    
    }

    function handleSearchFocus(){
        let header = document.querySelector('.header');
        header.attributes.class.value += ' focus';
        let files = document.querySelector('#files');

        files.attributes.class.value += ' active';
    }


    function handleChat(){
        let chatBox = document.querySelector('#chatBox');

        chatBox.attributes.class.value += ' active'
    }


    return(
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
                        <div className="chat-box" id="msg1" onClick={handleChat}>
                            <div className="chat-img">
                                <img onClick={()=>window.open(require("../images/icon.jpg"))} src={require("../images/icon.jpg")} alt="show"/>
                            </div>
                            <div className="chat-details">
                                <div className='chat-title'>
                                    <h3>AI chat</h3>
                                    <span>12:11 PM</span>
                                </div>
                                <div className="chat-msg">
                                    <p>Hey what's up?</p>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat-box" id="msg2">
                            <div className="chat-img">
                                <img onClick={()=>window.open(require("../images/ed.png"))} src={require("../images/ed.png")} alt="show"/>
                            </div>
                            <div className="chat-details">
                                <div className='chat-title'>
                                    <h3>Eddie</h3>
                                    <span>12:69 AM</span>
                                </div>
                                <div className="chat-msg">
                                    <p>Chats have be leaked get in the group now!</p>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat-box" id="msg3">
                            <div className="chat-img">
                                <img src={require("../images/no.jpg")} onClick={()=>window.open(require("../images/no.jpg"))} alt="show"/>
                            </div>
                            <div className="chat-details">
                                <div className='chat-title'>
                                    <h3>Laura</h3>
                                    <span>42:00 PM</span>
                                </div>
                                <div className="chat-msg">
                                    <p>We have a snitch in the group</p>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="chat-box" id="msg4">
                            <div className="chat-img">
                                <img src={require("../images/Camera man cry.png")} onClick={()=>window.open(require("../images/Camera man cry.png"))} alt="show"/>
                            </div>
                            <div className="chat-details">
                                <div className='chat-title'>
                                    <h3>Daniel</h3>
                                    <span>11:11 PM</span>
                                </div>
                            <div className="chat-msg">
                                <p>Clear the hardDrives!!!!</p>
                                <span>1</span>
                            </div>
                            </div>
                        </div>
                        <div className="chat-box" id="msg5">
                            <div className="chat-img">
                                <img src={require("../images/think.png")} onClick={()=>window.open(require("../images/think.png"))} alt="show"/>
                            </div>
                            <div className="chat-details">
                                <div className='chat-title'>
                                    <h3>G7-groupChat</h3>
                                    <span>11:11 PM</span>
                                </div>
                                <div className="chat-msg">
                                    <p>This is not a drill</p>
                                    <span>9</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="files" id="files">
                    <ul className="menu">
                        <li className="active"> chats</li>
                        <li>media</li>
                        <li>links</li>
                        <li>files</li>
                        <li>settings</li>
                    </ul>
                    <ul className="profiles">
                        <li>
                            <img src={require("../images/icon.jpg")} alt="show"/>
                            <h4>AI_chat</h4>
                        </li> 
                        <li>
                            <img src={require("../images/icon.jpg")} alt="show"/>
                            <h4>Eddie</h4>
                        </li> 
                        <li>
                            <img src={require("../images/icon.jpg")} alt="show"/>
                            <h4>Laura</h4>
                        </li> 
                        <li>
                            <img src={require("../images/Camera man cry.png")} alt="show"/>
                            <h4>Daniel</h4>
                        </li> 
                    </ul>
                </div>

                <div className="pen">
                    <i className="fas fa-pen">
                        <span className="material-symbols-sharp">
                            edit
                        </span>
                    </i>
                </div>
                <div className="pen" id="home">
                    <Link to="/">
                        <i className="fas fa-pen">
                            <span className="material-symbols-sharp">
                                home
                            </span>
                        </i>
                    </Link>
                </div>
            </aside>
    )
}