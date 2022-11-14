import "./navbar.scss";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import  { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>reseausocial</span>
                </Link>
                <HouseOutlinedIcon/>
                {darkMode ? <LightModeOutlinedIcon onClick={ toggle }/> : <NightlightOutlinedIcon onClick= { toggle }/>}
                <WidgetsOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Recherche..." />
                </div>
            </div>
            <div className="right">
                <PermIdentityOutlinedIcon/>
                <MailOutlinedIcon/>
                <NotificationsActiveOutlinedIcon/>
                <div className="user">
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;