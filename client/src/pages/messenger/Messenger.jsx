import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";

export default function Messenger() {
    return (
        <>
            <Topbar />
            <div className="messenger-container">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" className="chatMenuInput" placeholder="Search for friends" />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                        <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true} />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Enter your message..."></textarea>
                            <button className="chatSubmitButton"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>

                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">chatonline</div>

                </div>
            </div>
        </>
    );
}