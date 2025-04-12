import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(`http://localhost:5000/api/auth/register`, user); 

      
      if(response.status === 201) {
        // Registration successful
        alert("Registration successful! Please login.");
        // Clear the form
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        // Redirect to login page
        navigate("/login");
      } else {
        alert(response.data.extraDetails || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.extraDetails || error.response?.data?.message || "Registration failed. Please try again.");
    }
  }
  return (
    <>
        <section>
            <main>
                <div className='section-registration'>
                    <div className='container grid grid-two-cols'>
                      <div className='registration-image'>
                        <img src='/images/register.png' alt='a girl is trying to do registration' width="350" height="350"/>
                      </div>
                      {/* lets tackle form */}
                      <div className='registration-form'>
                        <h1 className='main-heading'>Registration Form</h1>
                        <br/>
                        <div className='form-div'>
                        <form onSubmit={handleSubmit} >
                          <div>
                            <label htmlFor='username'>username</label>
                            <input 
                              type='text' 
                              name='username'  
                              placeholder='username' 
                              id='username' 
                              required 
                              autoComplete='off' 
                              value={user.username}
                              onChange={handleInput}
                              />
                          </div>

                          <div>
                            <label htmlFor='email'>email</label>
                            <input 
                              type='email' 
                              name='email'  
                              placeholder='email' 
                              id='email' 
                              required 
                              autoComplete='off' 
                              value={user.email}
                              onChange={handleInput}
                              />
                          </div>

                          <div>
                            <label htmlFor='phone'>phone</label>
                            <input 
                              type='number' 
                              name='phone'  
                              placeholder='phone' 
                              id='phone' 
                              required 
                              autoComplete='off' 
                              value={user.phone}
                              onChange={handleInput}
                              />
                          </div>

                          <div>
                            <label htmlFor='password'>password</label>
                            <input 
                              type='password' 
                              name='password'  
                              placeholder='password' 
                              id='password' 
                              required 
                              autoComplete='off' 
                              value={user.password}
                              onChange={handleInput}
                              />
                          </div>

                          <br/>

                          <button type='submit' className='btn btn-submit'>Register</button>

                        </form>
                        </div>
                      </div>
                    </div>
                </div>
            </main>
        </section>
    </>
  )
}

export default Register