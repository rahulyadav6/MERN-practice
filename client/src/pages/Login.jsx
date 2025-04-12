import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth";
import {  toast } from 'react-toastify';

const Login = () => {

  const { storeInLs } = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {      
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email: user.email.trim(),
        password: user.password.trim()
      });
      if(response.status === 200){
        setUser({
          email:"",
          password:""
        })
        toast.success("Login successful");
        console.log(response.data);
        // localStorage.setItem("token", response.data.token);
        storeInLs(response.data.token);
        navigate("/");
      }else{
        alert("Invalid Credential");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.extraDetails || error.response?.data?.message || "Failed to login Try again");
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="Let's fill the login form"
                  width="400"
                  height="400"
                />
              </div>
              {/* lets tackle form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>


                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />

                  <button type="Login" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
