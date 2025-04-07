/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const storeInLs = (serverToken)=>{
        return localStorage.setItem("token",serverToken);
    }
    return <AuthContext.Provider value={{storeInLs}}>
        {children}
    </AuthContext.Provider>
}

