import "./chat.scss";
import { useState } from "react";

function Chat(){

const [chat, setChat] = useState(true);

    return(
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>

                <div className="message">
                    <img src="/profile2.png" alt="" />
                    <span>Steve</span>
                    <p>Lorem ipsum dolor sit amet cons....
                    </p>
                </div>
            </div>


            {chat &&(
                <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/profile2.png" alt="" />
                        Steve
                    </div>
                    <span className="close" onClick={() => setChat(null)}>X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage own">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>

                    <div className="chatMessage">
                        <p>Lorem ipsum dolor, sit amet </p>
                        <span>1 Hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea name="" id=""></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat;