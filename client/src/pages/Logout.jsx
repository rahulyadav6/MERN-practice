import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/auth";
// import { toast } from "react-toastify";

export const Logout = ()=>{
    const {logoutUser} = useContext(AuthContext);
    useEffect(()=>{
        logoutUser();
        // toast.success("Logged out");
    },[logoutUser]);

    return <Navigate to="/login" />
}
