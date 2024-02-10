import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isEmail } from "./utils";

export default function Judge() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const requestObj = {};
    requestObj.password = password;
    requestObj.user_type = "judge";

    isEmail(email) ? (requestObj.email = email) : (requestObj.username = email);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    const response = await fetch(
      "http://localhost:5000/users/login-user",
      requestOptions
    );

    const result = await response.json();

    if (result.status) {
      localStorage.setItem('judge', JSON.stringify(result.data));
      alert(result.message);
      navigate("/judgeLogin");
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <div className="wrapper-1">
        <nav className="nav-lawyer">
          <div className="menu-lawyer">
            <ul>
              <li className="lawyer-child">
                <div className="nav-lawyer-logo">
                  <img
                    width="94"
                    height="94"
                    src="https://img.icons8.com/3d-fluency/94/law.png"
                    alt="law"
                  />
                </div>
              </li>
              <li>
                <a href="/" className="link">
                  Home
                </a>
              </li>
              <li>
                <a href="/AboutUs" className="link">
                  About us
                </a>
              </li>
              <li>
                <a href="/contactUs" className="link">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/faqs/govern" className="link">
                  FAQ's
                </a>
              </li>
              <li>
                <div className="nav-button">
                  <Link to="/Forgot/2">
                    <button className="button">
                      <p>Forgot Your Password?</p>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="login-parent">
          <div className="login2">
            <div>
              <p className="text_login">
                <b>Justice League</b>
              </p>
              <div className="User">
                <input
                  type="text"
                  className="input_field"
                  placeholder="Username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="User">
                <input
                  type="password"
                  className="input_field"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="login-button" onClick={handleLogin}>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
