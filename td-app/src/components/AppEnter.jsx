import React, { useState } from "react";
import { AppEnterProps } from "../interfaces";

const AppEnter = ({ handleUserRegister, handleUserEnter }: AppEnterProps) => {
  const [checkRegister, setRegister] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleCheckRegisterClick = () => {
    setRegister(!checkRegister);
  };

  const handleUserInfo = () => {
    setUserInfo({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
  };

  const handleEnterClick = () => {
    if (checkRegister) {
      handleUserRegister({
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      handleUserEnter({
        email: userInfo.email,
        password: userInfo.password,
      });
      setUserInfo({ email: userInfo.email, password: "" });
    }
  };

  return (
    <div className="app-enter">
      <div className="enter-form">
        <div className="enter-email">
          <span>Email</span>
          <input
            id="email"
            type="text"
            value={userInfo.email}
            onChange={handleUserInfo}
          />
        </div>
        <div className="enter-password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            value={userInfo.password}
            onChange={handleUserInfo}
          />
        </div>
        <div className="enter-button">
          <button onClick={handleEnterClick}>Enter</button>
        </div>
      </div>
      <div className="register">
        <input
          type="checkbox"
          checked={checkRegister}
          onChange={handleCheckRegisterClick}
        />
        <button onClick={handleCheckRegisterClick}>Register</button>
      </div>
    </div>
  );
};

export default AppEnter;
