/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const storeInLs = (serverToken)=>{
        return localStorage.setItem("token",serverToken);
    }
    let isLoggedIn = !!token;
    const logoutUser = ()=>{
        setToken("");
        return localStorage.removeItem('token');
    }
    return <AuthContext.Provider value={{ storeInLs, logoutUser, isLoggedIn }}>
        {children}
    </AuthContext.Provider>
}

