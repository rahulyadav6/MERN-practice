import React, { useState } from "react";

const Login = () => {
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
  const handleSubmit = (e)=>{
    e.preventDefault();
    
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

                  <button type="submit" className="btn btn-submit">
                    Register
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
