import React, { useState } from "react";
import "./Fgp.css";
import { useNavigate, useParams } from "react-router-dom";

export default function Fgp() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (userInput.trim() === "") {
      setErrorMessage("Username is required");
      return;
    }
    if (password.trim() === "" || confirmPassword.trim() === "") {
      setErrorMessage("Passwords cannot be empty");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const requestObj = {
      user_input: userInput,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    fetch("http://localhost:5000/users/reset-password", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          alert(result.message);
          id === "1" ? navigate("/lawyer") : navigate("/judge");
        } else {
          alert(result.message);
        }
      });
  };

  return (
    <div>
      <div className="ForgotYourPassword">
        <div className="login-box">
          <input
            type="text"
            placeholder="Enter your email or User Name"
            className="input-box"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            name="user"
          />
          <input
            type="password"
            placeholder="Enter the New password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="pass"
          />
          <input
            type="password"
            placeholder="Renter the Password"
            className="input-box"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="check"
          />
          <p style={{ color: "black" }}>{errorMessage}</p>
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
