import "./rightBar.scss";
import Doc from "../../assets/doc.png";
import Overboard from "../../assets/overboard.png";
import Luke from "../../assets/luke.png";
import Vador from "../../assets/vador.png";
import Yoda from "../../assets/yoda.png";
import Chewbacca from "../../assets/chewbacca.png";
import R2d2 from "../../assets/r2d2.png";
import C3po from "../../assets/c3po.png";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Doc} alt="" />
                            <span>Emmet Brown</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Overboard} alt="" />
                            <span>Biff Howard Tannen</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>Dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Chewbacca} alt="" />
                            <p>
                                <span>Chewbacca</span> a une nouvelle photo de profil
                            </p>
                        </div>
                        <span>Il y a 1 minute</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Yoda} alt="" />
                            <p>
                                <span>Yoda</span> a aimé un post
                            </p>
                        </div>
                        <span>Il y a 2 minutes</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Luke} alt="" />
                            <p>
                                <span>Luke Skywalker</span> a aimé un commentaire
                            </p>
                        </div>
                        <span>Il y a 10 minutes</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Luke} alt="" />
                            <div className="online"/>
                            <span>Luke Skywalker</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={Vador} alt="" />
                            <div className="online"/>
                            <span>Darth Vador</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={C3po} alt="" />
                            <div className="online"/>
                            <span>C3-PO</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={R2d2} alt="" />
                            <div className="online"/>
                            <span>R2-D2</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;