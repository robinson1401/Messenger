import "./message.css";

export default function Message({ own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="http://gaixinhkhoehang.com/wp-content/uploads/2022/06/20220426-ngo-thi-my-duyen-5-808x1212.jpg"
                    alt="" />
                <p className="messageText">Hello this is PornHub</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}