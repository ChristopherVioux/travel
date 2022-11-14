import { useContext } from "react";
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {

const {currentUser} = useContext(AuthContext)

const stories = [
    {
        id: 1,
        name:"Gédeon",
        img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        name:"Jean Moulin",
        img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },    {
        id: 3,
        name:"Bruce Wayne",
        img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },    {
        id: 4,
        name:"Alfred Pennyworth",
        img: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
];

return (
    <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {Stories.map(story=>(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
)
}

export default Stories