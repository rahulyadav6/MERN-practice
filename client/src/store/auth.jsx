/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const [user, setUser] = useState("");
    
    useEffect(()=>{
        setIsLoggedIn(!!token);
    },[token]);

    const storeInLs = (serverToken)=>{
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    }

    // const storeInLs = (serverToken)=>{
    //     return localStorage.setItem("token",serverToken);
    // }
    
    const logoutUser = ()=>{
        setToken("");
        localStorage.removeItem('token');
    }

    // jwt authentication to get currently logged in user data
    const userAuthentication = async()=>{
        try {
            const response = await axios.get("http://localhost:5000/api/auth/user", {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            if(response.status === 200){
                const data = response.data;
                console.log("User Data: ", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };
    useEffect(()=>{
        // Only call authentication if we have a token
        if(token){
            userAuthentication();
        }
    },[token]); // Add token as dependency to re-run when token changes



    return <AuthContext.Provider value={{ storeInLs, logoutUser, isLoggedIn, user }}>
        {children}
    </AuthContext.Provider>
}

