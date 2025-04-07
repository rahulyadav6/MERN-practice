/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    
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
    return <AuthContext.Provider value={{ storeInLs, logoutUser, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

