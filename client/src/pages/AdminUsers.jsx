/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminUsers = () => {
    const {API} = useContext(AuthContext);

    const[users, setUsers] = useState([]);
    const { authorizationToken } = useContext(AuthContext);
    console.log("re-rendered");
    

    const getAllUsersData = async()=>{
        try {
            const response = await axios.get(`${API}/api/admin/users`,{
                headers:{
                    Authorization: authorizationToken
                }
            });
            const data = response.data;
            // console.log(`Users ${data}`); 
            setUsers(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUsersData();
    },[]);
    
    
    // delete the user on delete button click
    const deleteUser = async(id)=>{
        try {
            const response = await axios.delete(`${API}/api/admin/users/delete/${id}`, {
                headers: {
                    Authorization: authorizationToken
                }
            });
            const data = response.data;
            console.log("User deleted successfully:", data);
            toast.success("Deleted successfully");
            // Refresh the user list after deletion
            getAllUsersData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }

  return (
    <>
        <section className='admin-users-section'>
            <div className='container'>
                <h1>Admin Users Data</h1>
            </div>
            <div className='container admin-users'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((curUser, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.phone}</td>
                                    <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                                    <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    </>
  )
}

export default AdminUsers