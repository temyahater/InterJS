import React, { useState } from "react";
import { AppEnterProps } from "../interfaces";

const AppEnter = (props: AppEnterProps) => {
  const [checkRegister, setRegister] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  //   useEffect(() => setUserInfo({ email: "", password: "" }), []);

  const handleCheckRegisterClick = () => {
    setRegister(!checkRegister);
  };

  const handleUserInfo = () => {
    setUserInfo({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
  };

  //   const handleEnterClick = () => {
  //     const validateEmail = /\S+@\S+\.\S+/.test(userInfo.email);
  //     const validatePassword = /^[a-zA-Z0-9]{6,}$/.test(userInfo.password);

  //     if (checkRegister) {
  //       if (validateEmail) {
  //         if (validatePassword) {
  //   props.handleUserRegister({
  //     email: userInfo.email,
  //     password: userInfo.password,
  //   });
  //         } else {
  //           setUserInfo({ email: userInfo.email, password: "" });
  //           alert("Uncorrect password");
  //         }
  //       } else {
  //         alert("Uncorrect email");
  //       }
  //     } else {
  // props.handleUserEnter({
  //   email: userInfo.email,
  //   password: userInfo.password,
  // });
  //     }
  //   };
  //mysor (no malo li prigoditsya)

  const handleEnterClick = () => {
    if (checkRegister) {
      props.handleUserRegister({
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      props.handleUserEnter({
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
