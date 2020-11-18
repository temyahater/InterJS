import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { AppEnterProps } from "../interfaces";

const AppEnter = ({
  handleUserRegister,
  handleUserEnter,
  history,
}: AppEnterProps) => {
  const [checkRegister, setRegister] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleCheckRegisterClick = () => {
    setRegister(!checkRegister);
  };

  const handleUserInfo = (event) => {
    if (event.target.name === "email") {
      setUserInfo({
        email: event.target.value,
        password: userInfo.password,
      });
    } else {
      setUserInfo({
        email: userInfo.email,
        password: event.target.value,
      });
    }
  };

  const handleEnterClick = () => {
    if (checkRegister) {
      handleUserRegister(history, {
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      handleUserEnter(history, {
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
            name="email"
            type="text"
            value={userInfo.email}
            onChange={handleUserInfo}
          />
        </div>
        <div className="enter-password">
          <span>Password</span>
          <input
            name="password"
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

export default withRouter(AppEnter);
