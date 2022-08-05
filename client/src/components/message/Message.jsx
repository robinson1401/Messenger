import "./message.css";
import { format } from "timeago.js";

export default function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="http://gaixinhkhoehang.com/wp-content/uploads/2022/06/20220426-ngo-thi-my-duyen-5-808x1212.jpg"
                    alt="" />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}