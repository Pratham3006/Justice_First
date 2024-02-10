import React from "react";
import judge from "./components/assets/judge.png";
import lawyer from "./components/assets/lawyer.png";
import admin from './components/assets/admin-100 (2).png'
import { Link } from "react-router-dom";

export default function Loginasset() {
  const storedLawyer = JSON.parse(localStorage.getItem("lawyer"));
  const storedJudge = JSON.parse(localStorage.getItem("judge"));

  const isLawyerLoggedIn = !!storedLawyer?.id;
  const isJudgeLoggedIn = !!storedJudge?.id;

  return (
    <div>
      <div className="login-class">
        <p className="option-text">Choose your Login Option</p>
        <div className="parent-option">
          <div>
            <div className="option-1">
              <p className="option-text">Login as lawyer?</p>
              <img src={lawyer} alt="lawyer" className="option-img" />
            </div>
            {isLawyerLoggedIn ? (
              <Link to="/lawyerLogin">
                <button className="button">Login</button>
              </Link>
            ) : (
              <Link to="/lawyer">
                <button className="button">Login</button>
              </Link>
            )}
          </div>
          <div>
            <div className="option-2">
              <p className="option-text">Login as judge?</p>
              <img src={judge} alt="judge" className="option-img" />
            </div>
            {isJudgeLoggedIn ? (
              <Link to="/judgeLogin">
                <button className="button">Login</button>
              </Link>
            ) : (
              <Link to="/judge">
                <button className="button">Login</button>
              </Link>
            )}
          </div>
          <div>
            <div className="option-2">
              <p className="option-text">Login as Admin?</p>
              <img src={admin} alt="Admin" className="option-img" />
            </div>
            {isJudgeLoggedIn ? (
              <Link to="/AdminDashboard">
                <button className="button">Login</button>
              </Link>
            ) : (
              <Link to="/AdminLogin">
                <button className="button">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
