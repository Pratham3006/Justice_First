import React, { useState } from "react";
import "./Fgp.css";

export default function Fgp() {
  const [formData, setFormData] = useState({
    user: "",
    pass: "",
    check: "",
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (formData.user.trim() === '') {
      setErrorMessage("Username is required");
      return;
    }
    if (formData.pass.trim() === '' || formData.check.trim() === '') {
      setErrorMessage("Passwords cannot be empty");
      return;
    }

    if (formData.pass !== formData.check) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setErrorMessage('Form Submitted');
  };

  return (
    <div>
      <div className="ForgotYourPassword">
        <div className="login-box">
          <input
            type="text"
            placeholder="Enter your email or User Name"
            className="input-box"
            value={formData.user}
            onChange={handleInput}
            name="user"
          />
          <input
            type="password"
            placeholder="Enter the New password"
            className="input-box"
            value={formData.pass}
            onChange={handleInput}
            name="pass"
          />
          <input
            type="password"
            placeholder="Renter the Password"
            className="input-box"
            value={formData.check}
            onChange={handleInput}
            name="check"
          />
          <p style={{ color: 'black' }}>{errorMessage}</p>
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
