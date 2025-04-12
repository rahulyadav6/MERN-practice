import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth';

const AdminContacts = () => {
    const[contacts, setContacts] = useState([]);
    const { authorizationToken } = useContext(AuthContext);

    const getAllContactData = async()=>{
        try {
            const response = await axios.get(`http://localhost:5000/api/admin/contacts`,{
                headers:{
                    Authorization: authorizationToken
                }
            });
            const data = response.data;
            // console.log(`Users ${data}`); 
            setContacts(data);
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      getAllContactData();
    },[]);
  return (
    <>
        <section className='admin-users-section'>
            <div className='container'>
                <h1>Admin Contacts Data</h1>
            </div>
            <div className='container admin-contacts'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((curUser, index)=>{
                            return (
                                <tr key={index}>
                                    <td>{curUser.username}</td>
                                    <td>{curUser.email}</td>
                                    <td>{curUser.message}</td>
                                    <td>Edit</td>
                                    <td>Delete</td>
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

export default AdminContacts