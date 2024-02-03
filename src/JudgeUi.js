// JudgeUi.js

import React, { useState } from "react";
import Select from "react-select/async";
import bulb from "./components/assets/bulb-2.png";
import setbulb from "./components/assets/bulb1.png";
import { useNavigate } from "react-router-dom";
import './JudgeUi.css';
import Case from "./components/Case";

export default function JudgeUi() {
  const name = "Pratham";
  const lastname = "Shetty";
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

    // Toggle the dark mode state
    setIsDarkMode((prevMode) => !prevMode);
  };

  const loadOptions = (inputValue, callback) => {
    // Implement your logic to fetch options based on inputValue
    const filteredOptions = caseTypeOptions.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(filteredOptions);
  };

  const caseTypeOptions = [
    { value: 'PIL', label: 'Public Interest Litigation (PIL)' },
    { value: 'Murder', label: 'Murder' },
    { value: 'Assault', label: 'Assault' },
    { value: 'Sexual offense', label: 'Sexual offense' },
    { value: 'Kidnapping', label: 'Kidnapping' },
    { value: 'Robbery', label: 'Robbery' },
    { value: 'Cybercrime', label: 'Cybercrime' },
    { value: 'VIOLATION OF FUNDAMENTAL RIGHTS', label: 'Violation of Fundamental Rights' },
    { value: 'CHALLENGES TO THE VALIDITY OF LAWS', label: 'Challenges to the Validity of Laws' },
    { value: 'PUBLIC INTEREST LITIGATION CASES', label: 'Public Interest Litigation Cases' },
    { value: 'Habeas Corpus', label: 'Habeas Corpus' },
    { value: 'Mandamus', label: 'Mandamus' },
    { value: 'Certiorari', label: 'Certiorari' },
    { value: 'Land acquisition', label: 'Land acquisition' },
    { value: 'Boundary disputes', label: 'Boundary disputes' },
    { value: 'Tenancy disputes', label: 'Tenancy disputes' },
    { value: 'Land title disputes', label: 'Land title disputes' },
    { value: 'Unfair dismissal or termination', label: 'Unfair dismissal or termination' },
    { value: 'Employment contract', label: 'Employment contract' },
    { value: 'Wage and Benefits', label: 'Wage and Benefits' },
    { value: 'Workplace Discrimination', label: 'Workplace Discrimination' },
    { value: 'Workplace Harassment', label: 'Workplace Harassment' },
    { value: 'Income Tax disputes', label: 'Income Tax disputes' },
    { value: 'Goods and Services Tax', label: 'Goods and Services Tax' },
    { value: 'Customs and Excise duty', label: 'Customs and Excise duty' },
    { value: 'Trademark infringement', label: 'Trademark infringement' },
    { value: 'Patent infringement', label: 'Patent infringement' },
    { value: 'Trade secret violation', label: 'Trade secret violation' },
    { value: 'Copyright infringement', label: 'Copyright infringement' },
    { value: 'Copyright violations', label: 'Copyright violations' },
    { value: 'Bigamy', label: 'Bigamy' },
    { value: 'Patent disputes', label: 'Patent disputes' },
    { value: 'Government and public sector employee grievances', label: 'Government and public sector employee grievances' },
    { value: 'Administrative decisions challenges', label: 'Administrative decisions challenges' },
    { value: 'Service-related disputes', label: 'Service-related disputes' },
    { value: 'Environmental Pollution Cases', label: 'Environmental Pollution Cases' },
    { value: 'Wildlife Protection Cases', label: 'Wildlife Protection Cases' },
    { value: 'Public Health-related Cases', label: 'Public Health-related Cases' },
    { value: 'Matters related to Public Infrastructure and Utilities', label: 'Matters related to Public Infrastructure and Utilities' },
    { value: 'Dowry-related complaints', label: 'Dowry-related complaints' },
    { value: 'Domestic Violence', label: 'Domestic Violence' },
    { value: 'Child Custody', label: 'Child Custody' },
    { value: 'Divorce', label: 'Divorce' },
    { value: 'Alimony', label: 'Alimony' },
    { value: 'Child Support', label: 'Child Support' },
    { value: 'Financial Dispute', label: 'Financial Dispute' },
    { value: 'Emotional Abuse', label: 'Emotional Abuse' },
    { value: 'Child Abuse', label: 'Child Abuse' },
    { value: 'Religious Dispute', label: 'Religious Dispute' },
    { value: 'Dowry Harassment', label: 'Dowry Harassment' },
    { value: 'Drug offense', label: 'Drug offense' },
    { value: 'Maintenance', label: 'Maintenance' },
    { value: 'Parenting Dispute', label: 'Parenting Dispute' },
  ];

  const handleCaseTypeChange = (selectedOption) => {
    setSelectedCaseType(selectedOption);
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
        <button
          className="header-button12"
        >
          {storedUser?.id ? 'Logout' : 'Login'}
        </button>
      </nav>
      <div className={`header ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1>Cases Assigned for {name} {lastname}</h1>
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
          {selectedCaseType && (
            <p>Selected Case Type: {selectedCaseType.label}</p>
          )}

          <label htmlFor="caseIdInput">Enter Case ID:</label>
          <input
            type="text"
            id="caseIdInput"
            value={caseId}
            onChange={(e) => setCaseId(e.target.value)}
          />

          <button className="search-button" >
            Search
          </button>
          <div className="Parent-case">
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum "} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
            <Case case={"D1456"} description={"Robery occure at dombivil"} />
        </div>
          
        </div>
        
      </div>
    </div>
  );
}
