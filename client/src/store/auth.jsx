/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState("");
    const [services, setServices] = useState([])
    const authorizationToken = `Bearer ${token}`
    
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
            setIsLoading(true);
            const response = await axios.get("http://localhost:5000/api/auth/user", {
                headers:{
                    Authorization: authorizationToken
                }
            });
            if(response.status === 200){
                const data = response.data;
                console.log("User Data: ", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error fetching data");
                setIsLoading(false);
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



    const getServices = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/data/service");
            if (response.status === 200) {
                const data = response.data;
                console.log("Fetched services data:", data.services);
                setServices(data.services);
            } else {
                console.error(`Error fetching services: ${response.status}`);
            }
        } catch (error) {
            console.error(`Services frontend error: ${error.message}`);
        }
    };

    useEffect(() => {
        userAuthentication(); 
        getServices(); 
    }, []);



    return <AuthContext.Provider value={{ storeInLs, logoutUser, isLoggedIn, user, services, authorizationToken, isLoading }}>
        {children}
    </AuthContext.Provider>
}

