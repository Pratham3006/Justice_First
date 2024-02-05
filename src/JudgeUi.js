// JudgeUi.js

import React, { useState, useEffect } from "react";
import Select from "react-select/async";
import bulb from "./components/assets/bulb-2.png";
import setbulb from "./components/assets/bulb1.png";
import { useNavigate } from "react-router-dom";
import "./JudgeUi.css";
import Case from "./components/Case";
import { allCaseTypes } from "./utils";

export default function JudgeUi() {
  const storedUser = JSON.parse(localStorage.getItem("judge"));
  const name = storedUser?.first_name;
  const lastName = storedUser?.last_name;
  const username = storedUser?.username;
  const usertype = "judge";

  const [submit, setSubmit] = useState({
    backgroundColor: "purple",
  });
  const [image, setImage] = useState(bulb);
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCaseType, setSelectedCaseType] = useState(null);
  const [caseId, setCaseId] = useState("");
  const [cases, setCases] = useState(null);
  const [filteredCases, setFilteredCases] = useState(null);

  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        };

        const response = await fetch(
          `http://localhost:5000/cases/get-all-cases?user_type=${usertype}&&username=${username}`,
          requestOptions
        );
        const result = await response.json();

        // Set the data in state
        setCases(result.data);
        setFilteredCases(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the API when the component mounts
    fetchData();
  }, []);

  const navigate = useNavigate();

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

    // Toggle the dark mode state
    setIsDarkMode((prevMode) => !prevMode);
  };

  const loadOptions = (inputValue, callback) => {
    // Implement your logic to fetch options based on inputValue
    const filteredOptions = caseTypeOptions.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filteredOptions);
  };

  const caseTypeOptions = allCaseTypes;

  const handleCaseTypeChange = (selectedOption) => {
    setSelectedCaseType(selectedOption);
  };

  const handleLogout = async () => {
    const requestObj = {
      user_id: storedUser?.id,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestObj),
    };

    fetch("http://localhost:5000/users/logout-user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status) {
          localStorage.removeItem("judge");
          alert(result.message);
          navigate("/");
        }
      });
  };

  const resetCaseType = () => {
    setSelectedCaseType(null);
  };

  const handleSearch = () => {
    // Filter cases based on selected subclass and case ID
    let filteredList = cases;

    if (selectedCaseType) {
      filteredList = filteredList.filter(
        (singleCase) => singleCase.case_subclass === selectedCaseType.value
      );
    }

    if (caseId) {
      filteredList = filteredList.filter((singleCase) =>
        singleCase.case_id.includes(caseId)
      );
    }
    setFilteredCases(filteredList);
    resetCaseType();
  };

  const handleReset = () => {
    setFilteredCases(cases);
    setCaseId("");
  };

  return (
    <div className="Parent-Ui">
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
        <button className="header-button12" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className={`header ${isDarkMode ? "dark-mode" : ""}`}>
        <h1>
          Cases Assigned for {name} {lastName}
        </h1>
        <div className="filters">
          <label htmlFor="caseTypeDropdown">Select Case Type:</label>
          <Select
            id="caseTypeDropdown"
            value={selectedCaseType}
            onChange={handleCaseTypeChange}
            options={caseTypeOptions}
            isSearchable
            loadOptions={loadOptions}
          />

          <label htmlFor="caseIdInput">Enter Case ID:</label>
          <input
            type="text"
            id="caseIdInput"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
          />

          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
          <button className="search-button" onClick={handleReset}>
            Reset
          </button>
          <div className="Parent-case">
            {filteredCases?.map((singleCase, index) => (
              <Case
                key={singleCase.case_id}
                case={singleCase?.case_id}
                description={singleCase?.case_text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
