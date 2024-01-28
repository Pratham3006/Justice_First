import React, { useRef, useState } from 'react';
import './Admin.css';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const nameRef = useRef();
  const secondNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const lawyerIdRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const name = nameRef.current.value;
    const secondName = secondNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    const username = lawyerIdRef.current.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccess(false);
      return;
    }

    const requestObj = {}
    requestObj.first_name = name;
    requestObj.last_name = secondName;
    requestObj.email = email;
    requestObj.password = password;
    requestObj.username = username;

    if (username[0].toLowerCase() === 'l') {
      requestObj.user_type = 'lawyer'
    } else if (username[0].toLowerCase() === 'j') {
      requestObj.user_type = 'judge'
    } else {
      setError('Invalid Username');
      setSuccess(false);
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    const response = await fetch(
      "http://localhost:5000/users/create-user",
      requestOptions
    );

    const result = await response.json();

    console.log(result);
    if (result.status) {
      alert(result.message);
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="Admin">
      <div className="Heading">
        <p>
          <b>Admin Panel</b>
        </p>
      </div>
      <div className='parent-wrapper'>
      <div className="wrapper-3">
        
          <div className='login1'>
            <p className="text_login">
              <b>Admin Panel</b>
            </p>
            <div className="User">
              <input
                type="text"
                className="input_field"
                placeholder="Name"
                ref={nameRef}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Second name"
                ref={secondNameRef}
              />
            </div>
            <div className="User">
              <input
                type="email"
                className="input_field"
                placeholder="Email"
                ref={emailRef}
              />
              <input
                type="password"
                className="input_field"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <div className="User">
              <input
                type="password"
                className="input_field"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
              />
              <input
                type="text"
                className="input_field"
                placeholder="Lawyer ID"
                ref={lawyerIdRef}
              />
            </div>
            <div className="Submit">
              <button className="admin-button"onClick={handleSignUp}>
                <b>Sign Up</b>
              </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </div>
        </div>
      {success && (
        <div className="success-message">
          <p>Registration successful! You will be redirected to the home page.</p>
        </div>
      )}
    </div>
  );
}
