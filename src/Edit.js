import React, { useState } from "react";
import pencil from "./components/assets/pencil.png";
import eye from "./components/assets/eye.png";
import eyeSlash from "./components/assets/eyeslash.png";
import "./Edit.css";

export default function Edit() {
  const [name, setName] = useState("Pratham");
  const [secondname, setSecondName] = useState("Shetty");
  const [email, setEmail] = useState("prathamshetty71@gmail.com");
  const [password, setPassword] = useState("Pratham45");
  const [showPassword, setShowPassword] = useState(false);
  const [editableField, setEditableField] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSecondName, setEditedSecondName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPassword, setEditedPassword] = useState("");

  const handleEdit = (field, value) => {
    setEditableField(field);
    switch (field) {
      case "name":
        setEditedName(value);
        break;
      case "secondname":
        setEditedSecondName(value);
        break;
      case "email":
        setEditedEmail(value);
        break;
      case "password":
        setEditedPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (editedName !== "") {
      setName(editedName);
    }
    if (editedSecondName !== "") {
      setSecondName(editedSecondName);
    }
    if (editedEmail !== "") {

      setEmail(editedEmail);
    }
    if (editedPassword !== "") {
      console.log(`Password changed from "${password}" to "${editedPassword}"`);
      setPassword(editedPassword);
    }
    setEditableField(null); // Reset editableField after submission
    setEditedName("");
    setEditedSecondName("");
    setEditedEmail("");
    setEditedPassword("");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
            value={editableField === "name" ? editedName : name}
            onChange={(e) => handleEdit("name", e.target.value)}
            disabled={editableField !== "name"}
          />
          <button className="edit-pencil" onClick={() => handleEdit("name", name)}>
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <label>Second Name:- </label>
        <div className="child-edit">
          <input
            placeholder="second name"
            type="text"
            className="child-input"
            value={editableField === "secondname" ? editedSecondName : secondname}
            onChange={(e) => handleEdit("secondname", e.target.value)}
            disabled={editableField !== "secondname"}
          />
          <button className="edit-pencil" onClick={() => handleEdit("secondname", secondname)}>
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <label>Email:- </label>
        <div className="child-edit">
          <input
            placeholder="email"
            type="email"
            className="child-input"
            value={editableField === "email" ? editedEmail : email}
            onChange={(e) => handleEdit("email", e.target.value)}
            disabled={editableField !== "email"}
          />
          <button className="edit-pencil" onClick={() => handleEdit("email", email)}>
            <img src={pencil} alt="Edit" />
          </button>
        </div>
        <label>Password:- </label>
        <div className="child-edit">
          <div style={{ position: "relative" }}>
            <input
              placeholder="password"
              type={showPassword ? "text" : "password"}
              className="child-input"
              value={editableField === "password" ? editedPassword : password}
              onChange={(e) => handleEdit("password", e.target.value)}
              disabled={editableField !== "password"}
            />
            <button
              className="toggle-password"
              onClick={togglePasswordVisibility}
              style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%)", borderRadius:"50px"}}
            >
              <img src={showPassword ? eyeSlash : eye} alt="Toggle password visibility" />
            </button>
          </div>
          <button className="edit-pencil" onClick={() => handleEdit("password", password)}>
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
