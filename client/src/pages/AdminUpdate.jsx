import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminUpdate = () => {
  const {API} = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        username:"",
        email:"",
        phone:"",
    });
    const params = useParams();
    const {authorizationToken} = useContext(AuthContext);
    const getSingleUserData = async()=>{
        try{
            const response = await axios.get(`${API}/api/admin/users/${params.id}`,{
                headers:{
                    Authorization: authorizationToken
                }
            })
            const data = response.data;
            // console.log(`Single user: ${data}`);
            setData(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getSingleUserData();
    },[])
    const  handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [name] : value,
        })
    }

    // to update the data dynamically
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const response = await axios.patch(`${API}/api/admin/users/update/${params.id}`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            });
            if (response.status === 200) {
                toast.success("Updated successfully");
                // Use React Router's useNavigate for redirection without page refresh
                navigate('/admin/users');
            } else {
                toast.error("Failed to update");
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while updating");
        }
    }
  return (
    <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          {/* contact form */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone">Mobile</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  value={data.phone}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <button type="submit">Update</button>
              </div>
            </form>
          </section>
        </div>
      </section>
  )
}

export default AdminUpdate;