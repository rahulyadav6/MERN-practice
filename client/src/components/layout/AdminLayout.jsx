import React, { useContext } from 'react'
import { Navigate, NavLink,Outlet } from 'react-router-dom'
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { AuthContext } from '../../store/auth';

const AdminLayout = () => {
  const { user, isLoading } = useContext(AuthContext);
  console.log("Admin layout" , user);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(!user.isAdmin){
    return <Navigate to="/"/>
  }
  
  return (
    <>
      <header>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users"><FaUser /> users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><FaMessage /> contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service"><FaRegListAlt/> services</NavLink>
              </li>
              <li>
                <NavLink to="/"><FaHome/> Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet/>
    </>
  )
}

export default AdminLayout