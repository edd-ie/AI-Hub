import React, {useState, useEffect} from "react";

const API_TOKEN ='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'

// "conversation":{
//     "generated_responses":["","I think you're asking for a friend. I'm sure he'd appreciate it if we could get him some of your stuff, too! :D DDDP 3R3LLLZY7N5XQ"],
// "past_user_inputs":["","To be or not to be that is the question?"]}


export default function Section(){
    const[pastChat, setPastChat] = useState([])
    console.log("file: chatSect.js:12 -> Section -> pastChat:", pastChat.length);
    const[genChat, setGenChat] = useState([])
    console.log("file: chatSect.js:14 -> Section -> genChat:", genChat);

    const [chatReply, setChat] = useState([])
    console.log("file: chatSect.js:17 -> Section -> chatReply:", chatReply);

    function handleClearChat(){
        setPastChat([])
        setGenChat([])
        setGenChat([])
        let chats = document.getElementsByClassName("chat-container");
        console.log("file: chatSect.js:24 -> handleClearChat -> chats:", chats[0]);

    }

    function handleChat(){
        let input = document.getElementById("chatMsg")
        let chat = input.value;
        console.log("file: chatSect.js:9 -> handleChat -> chat:", chat);

        let userData = {
            inputs: {
                past_user_inputs: pastChat, 
                generated_responses: genChat, 
                text: `${chat}`
            }
        }

        fetch("https://api-inference.huggingface.co/models/facebook/blenderbot-400m-distill",
            {
                headers: { Authorization: `Bearer ${API_TOKEN}` },
                method: "POST",
                body: JSON.stringify(userData),
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log('AI log:',data);
            console.log("file: chatSect.js:41 -> handleChat -> data:", data);
            setPastChat(data.conversation.past_user_inputs);
            setGenChat(data.conversation.generated_responses);
            let index = data.conversation.generated_responses.length - 1
            setChat([...chatReply, {user: `${chat}`, ai: `${data.conversation.generated_responses[index]}`}]);
        })
        .catch(error => console.error(error));

        input.value = ""
    }

    function handleEnter(e){
        if(e.key === "Enter"){
            handleChat()
        }
    }

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let chatLog = chatReply.map((chat, index) => {
        return(
            <>
                <div className="chat-msg reply" key={'user'+index}>
                    <p>{chat.user}</p>
                    <span className="time">{time}</span>
                </div>
                <div className="chat-msg" key={'ai'+index}>
                    <p>{chat.ai}</p>
                    <span className="time">{time}</span>
                </div>
            </>
        )
    })



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
                            <p>Hey what do you wanna talk about?</p>
                            <span className="time">06:04 PM</span>
                        </div>
                        {chatLog}
                    </div>

                    <div className="message-box">
                        <div className="micro clear"   onClick={handleClearChat}>
                            <i className="fas fa-microphone">
                                <span className="material-symbols-sharp">
                                    mop
                                </span>
                            </i>
                        </div>
                        <div className="message-content">
                            <i className="far fa-smile">
                                <span className="material-symbols-sharp">
                                    mood
                                </span>
                            </i>
                            <input type="text" placeholder="Message" id="chatMsg" onKeyDown={handleEnter}/>
                            <i className="fas fa-paperclip">
                                <span className="material-symbols-sharp">
                                    attach_file
                                </span>
                            </i>
                        </div>
                        <div className="micro" onClick={handleChat}>
                            <i className="fas fa-microphone">
                                <span className="material-symbols-sharp">
                                    send
                                </span>
                            </i>
                        </div>                        
                    </div>
                </div>
            </section>
    )
}