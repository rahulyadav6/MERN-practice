import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth';

const AdminUsers = () => {
    const[users, setUsers] = useState([]);
    const { authorizationToken } = useContext(AuthContext);

    const getAllUsersData = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/api/admin/users`,{
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
    
    
    // delete the user on delete button click
    const deleteUser = async(id)=>{
        try {
            console.log(id);
            const response = await axios.delete(`http://localhost:5000/api/admin/users/delete/${id}`,{
            headers:{
                Authorization: authorizationToken
            }
        });
        const data = response.data;
        console.log("User after deletion:", data);
        
        }catch(error){
            console.log(error);
        }
    }
    
    useEffect(() => {
        getAllUsersData();
    },[users]);

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
                                    <td>Edit</td>
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