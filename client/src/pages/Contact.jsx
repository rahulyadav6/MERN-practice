import React, { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username:"",
    email:"",
    message:""
  });
  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  }; 

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <img src="images/support.png" alt="We are always ready to help" width="30%" height="30%" />

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
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="50"
                  rows="5"
                  required
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                ></textarea>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4940.228745400387!2d75.70368819552925!3d31.260672073366084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5fca6a8887f9%3A0x48044ce5b6683280!2sLPU%20FRONT%20ENTRANCE%20GATE!5e0!3m2!1sen!2sin!4v1743860305766!5m2!1sen!2sin"
        width="100%" 
        height="450" 
        allowFullScreen
        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;
