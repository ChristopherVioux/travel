import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

    const login = () => {
        // To do: login function
        setCurrentUser({
            id: 1,
            name: "John Doe",
            profilePic: "../assets/chewbacca.png"
        });
    };

    useEffect(()=>{
        localStorage.getItem("user", JSON.stringify(currentUser))
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )
};