import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pencil from "./components/assets/pencil.png";
import "./Edit.css";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem(`${Number(id) === 1 ? "lawyer" : "judge"}`)
  );

  const [name, setName] = useState(storedUser.first_name);
  const [secondName, setSecondName] = useState(storedUser.last_name);
  const [email, setEmail] = useState(storedUser.email);
  const [editableField, setEditableField] = useState(null);

  const handleEdit = (field, value) => {
    setEditableField(field);
  };

  const handleSubmit = () => {
    const updatedUser = {
      ...storedUser,
      first_name: name,
      last_name: secondName,
      email: email,
    };

    localStorage.setItem(
      `${Number(id) === 1 ? "lawyer" : "judge"}`,
      JSON.stringify(updatedUser)
    );

    setEditableField(null);

    // Make an API call to update the user
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    };

    fetch(`http://localhost:5000/users/update-profile`, requestOptions);
    navigate(`${Number(id) === 1 ? "/lawyerLogin" : "/judgeLogin"}`);
  };

  return (
    <div className="wrapper-ed">
      <div className="parent-edit">
        <h1 style={{ fontWeight: "800", fontSize: "40px", color: "red" }}>
          Edit your Profile
        </h1>
        <label>Name:- </label>
        <div className="child-edit">
          <input
            placeholder="name"
            type="text"
            className="child-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={editableField !== "name"}
          />
          <button
            className="edit-pencil"
            onClick={() => handleEdit("name", name)}
          >
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <label>Second Name:- </label>
        <div className="child-edit">
          <input
            placeholder="second name"
            type="text"
            className="child-input"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            disabled={editableField !== "secondName"}
          />
          <button
            className="edit-pencil"
            onClick={() => handleEdit("secondName", secondName)}
          >
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <label>Email:- </label>
        <div className="child-edit">
          <input
            placeholder="email"
            type="email"
            className="child-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={editableField !== "email"}
          />
          <button
            className="edit-pencil"
            onClick={() => handleEdit("email", email)}
          >
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <button className="child-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
