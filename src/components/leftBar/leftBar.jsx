import "./leftBar.scss";
import Events from "../../assets/events.png";
import Friends from "../../assets/friends.png";
import Gallery from "../../assets/gallery.png";
import Groups from "../../assets/groups.png";
import Memories from "../../assets/memories.png";
import Messages from "../../assets/messages.png";
import Videos from "../../assets/videos.png";
import Marty from "../../assets/marty.png";


const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={Marty} alt="User" />
                        <span>Marty Mcfly</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="Friends icon" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="Groups icon" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="Memories icon" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="Groups icon" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="Memories icon" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="Groups icon" />
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="Memories icon" />
                        <span>Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar;