import "./navbar.scss";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>reaseausocial</span>
                </Link>
                <HouseOutlinedIcon/>
                <NightlightOutlinedIcon/>
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
                    <img src="https://images.pexels.com/photos/4736359/pexels-photo-4736359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>Marty Mcfly</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;