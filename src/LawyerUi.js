import React, { useState } from "react";
import "./LawyerUi.css";
import bulb from "./components/assets/bulb-2.png";
import setbulb from "./components/assets/bulb1.png";
import { useNavigate } from "react-router-dom";

export default function LawyerUi() {
  const [submit, setSubmit] = useState({
    backgroundColor: "purple",
  });
  const [image, setImage] = useState(bulb);
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const navigate = useNavigate();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleDarkmode = () => {
    setImage((currentImage) => (currentImage === bulb ? setbulb : bulb));

    setSubmit((currentSubmit) => {
      const newBackgroundColor =
        currentSubmit.backgroundColor === "green" ? "purple" : "green";

      return {
        backgroundColor: newBackgroundColor,
      };
    });

    setStyle((currentStyle) => {
      const newColor =
        currentStyle.color === "black" ? "antiquewhite" : "black";
      const newBackgroundColor =
        currentStyle.backgroundColor === "white" ? "black" : "white";

      return {
        color: newColor,
        backgroundColor: newBackgroundColor,
      };
    });
  };
  const [text, setText] = useState(" ");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleText = () => {
    setText(" ");
  };

  const handleLogout = async () => {
    const requestObj = {}
    requestObj.user_id = storedUser.id;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj)
    };

    const response = await fetch(
      "http://localhost:5000/users/logout-user",
      requestOptions
    );

    const result = await response.json();

    if(result.status) {
      localStorage.removeItem("user");
      alert(result.message);
      navigate("/");
    }
  };

  const redirectToLogin = async () => {
    navigate("/lawyer");
  };

  return (
    <>
      <nav className="Lawyer-Login" style={style}>
        <div className="header-lawyer">
          <button className="header-button" onClick={handleDarkmode}>
            <img src={image} className="bulb-image" alt="" />
          </button>
        </div>
        <div className="header-lawyer" style={style}>
          <p>Rules</p>
        </div>
        <div className="header-lawyer" style={style}>
          <p>Nomenclature</p>
        </div>
        <div className="header-lawyer" style={style}>
          <p>Guide and manual</p>
        </div>
        <div className="header-lawyer" style={style}>
          <p>Documentation</p>
        </div>
        <button
          className="header-button12"
          onClick={storedUser?.id ? handleLogout : redirectToLogin}
        >
          {storedUser?.id ? 'Logout' : 'Login'}
        </button>
      </nav>

      <div className="content" style={style}>
        <div className="marquee">
          <div className="track">
            <div className="text" style={{ color: "red" }}>
              &nbsp;This is a government Website. Any form of misuse or
              malpractice which may lead to discrepancy in the official data can
              lead to legal punishments.
            </div>
          </div>
        </div>
        <p className="content-para">
          Welcome to Justice First
          {storedUser && ", " + storedUser?.first_name}
        </p>
        {storedUser?.id ? (
          <div className="transmission">
            <p>Enter the case summary for your text</p>
            <div className="Lawyer-input">
              <div className="case-parent">
              <input  className="case-box" placeholder="Enter the Judge's username"></input>
              <input  className="case-box" placeholder="Enter the case ID"></input>
              </div>

            <textarea
              type="text"
              className="input-box-lawyer"
              value={text}
              onChange={handleChange}
            />
            </div>
            <div className="button-div">
              <button
                className="input-button-data"
                onClick={handleText}
                style={{
                  ...submit,
                  color: style.color,
                  fontSize: style.color === "antiquewhite" ? "20px" : "20px",
                  fontWeight: "800",
                }}
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>You Need to LogIn First</div>
        )}
      </div>
    </>
  );
}
