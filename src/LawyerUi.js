import React, { useState } from "react";
import "./LawyerUi.css";
import bulb from "./components/assets/bulb-2.png";
import setbulb from "./components/assets/bulb1.png";
import clock from './components/assets/clock-1.png';
import edit from './components/assets/edit.png';
import { Link, useNavigate } from "react-router-dom";

export default function LawyerUi() {
  const [submit, setSubmit] = useState({
    backgroundColor: "purple",
  });
  const [image, setImage] = useState(bulb);
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [text, setText] = useState("");
  const [judgeUsername, setJudgeUsername] = useState("");
  const [caseId, setCaseId] = useState("");

  let caseSubclass;

  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("lawyer"));

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

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
  const handleChange = (e) => {
    setText(e.target.value);
  };

  function clearAllInputFields() {
    // Get all input elements in the form
    const inputFields = document.querySelectorAll("input");

    // Loop through each input field and set its value to an empty string
    inputFields.forEach((input) => {
      input.value = "";
    });
    setText("");
    setSelectedDate("");
  }

  const handleSubmit = () => {
    const predictObj = {
      text_description: text,
    };

    const reqOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(predictObj),
    };

    fetch("http://localhost:5000/predict", reqOptions)
      .then((response) => response.json())
      .then((res) => {
        caseSubclass = res.data;

        const requestObj = {
          case_id: caseId,
          case_text: text,
          case_subclass: caseSubclass,
          created_date: selectedDate,
          lawyer_username: storedUser?.username,
          judge_username: judgeUsername,
        };

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestObj),
        };

        return fetch("http://localhost:5000/cases/add-case", requestOptions);
      })
      .then((response) => response.json())
      .then((res) => {
        if (res.status) {
          clearAllInputFields();
        }
        alert(res.message);
      })
      .catch((err) => console.log(err.message));
  };

  const handleLogout = async () => {
    const requestObj = {};
    requestObj.user_id = storedUser.id;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    const response = await fetch(
      "http://localhost:5000/users/logout-user",
      requestOptions
    );

    const result = await response.json();

    if (result.status) {
      localStorage.removeItem("lawyer");
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
          <button className="header-button12" onClick={handleDarkmode}>
            <img src={image} className="bulb-image" alt="" />
          </button>
        </div>
        <div className="header-lawyer" style={style}>
          <Link to="/LawyerRules">Rules</Link>
        </div>
        <div className="header-lawyer" style={style}>
          <p>Nomenclature</p>
        </div>
        <div className="header-lawyer" style={style}>
        <Link to="/Myactivity">My Activity</Link>
        </div>
        <div className="header-lawyer" style={style}>
        <Link to="/Validity">
        <button className="header-button12" >
            <img src={edit} className="bulb-image" alt="" />
          </button>
          </Link>
        </div>
        <button
          className="header-button12"
          onClick={storedUser?.id ? handleLogout : redirectToLogin}
        >
          {storedUser?.id ? "Logout" : "Login"}
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
        <div className="content-para-1">
          <div className="content-para-click"><Link to="/History"><img src={clock}></img></Link></div>
        </div>
        <div className="content-para">
          Welcome to Justice First
          {storedUser && ", " + storedUser?.first_name}
        </div>
        {storedUser?.id ? (
          <div className="transmission">
            <p>Enter the case summary for your text</p>
            <div className="Lawyer-input">
              <div className="case-parent">
                <input
                  className="case-box"
                  placeholder="Enter the Judge's username"
                  onChange={(e) => setJudgeUsername(e.target.value)}
                ></input>
                <input
                  className="case-box"
                  placeholder="Enter the case ID"
                  onChange={(e) => setCaseId(e.target.value)}
                ></input>
                <label htmlFor="datePicker">Case Filed On:</label>
                <input
                  className="case-box"
                  type="date"
                  id="datePicker"
                  name="datePicker"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
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
                onClick={handleSubmit}
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
