import React, { useState } from "react";
import "./ContactUs.css";
import { useParams, useNavigate } from "react-router-dom";

export default function ContactUs() {
  const { user_type } = useParams();
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem(`${user_type === "judge" ? "judge" : "lawyer"}`)
  );

  const [name, setName] = useState(
    `${storedUser?.first_name + " " + storedUser?.last_name}`
  );
  const [email, setEmail] = useState(`${storedUser?.email}`);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const requestObj = {
      name: name,
      email: email,
      message: message,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    const response = await fetch("http://localhost:5000/complaints/add-complaint", requestOptions);
    const result = await response.json();

    if(result.status) {
      navigate(`${user_type === "judge" ? "/judgeLogin" : "/lawyerLogin"}`)
    }
    alert(result.message);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="expansion-box"
              required
            />
          </div>
          <div className="cu-ip">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "white",
              width: "150px",
              height: "50px",
              fontWeight: "600",
              fontSize: "20px",
              borderRadius: "10px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
