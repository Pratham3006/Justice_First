import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="wrapper-cu">
      <div className="parent-cu">
        <div className="cu-form">
          <h2>Contact Us</h2>
          <div className="cu-ip">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="expansion-box"
              required
            />
          </div>
          <div className="cu-ip">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="expansion-box"
              required
            />
          </div>
          <div className="cu-ip">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={handleSubmit} style={{backgroundColor:"white", width:"150px",height:"50px",fontWeight:"600",fontSize:"20px", borderRadius:"10px" }}>Submit</button>
        </div>
      </div>
    </div>
  );
}
