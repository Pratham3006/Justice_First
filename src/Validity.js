import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Validity.css";

export default function Validity() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem(`${Number(id) === 1 ? "lawyer" : "judge"}`)
  );
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const requestObj = {
      user_id: storedUser.id,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestObj),
    };

    const response = await fetch(
      `http://localhost:5000/users/validate-password`,
      requestOptions
    );

    const result = await response.json();

    if (result.status) {
      navigate(`/Edit/${id}`);
    }
    alert(result.message);
  };

  return (
    <div>
      <div className="wrapper-vd">
        <div className="valid-box">
          <div className="valid-items">
            <p className="valid-child">
              To Edit Your Profile Kindly Re-enter your Password
            </p>
            <input
              type="password"
              placeholder="Enter your Password"
              className="valid-child"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="valid-child" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
