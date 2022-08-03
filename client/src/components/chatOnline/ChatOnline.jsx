import "./chatOnline.css";

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://gamek.mediacdn.vn/133514250583805952/2021/4/22/photo-1-1619075963210172753584.jpg"
                        alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">RobinSon</span>
            </div>
        </div>
    )
}