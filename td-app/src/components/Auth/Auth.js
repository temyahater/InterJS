import React from "react";
import AppEnter from "../AppEnter/AppEnter";
import Nav from "../Nav/Nav";
import { AuthProps } from "../../models/interfaces";
import "./Auth.css";

function Auth({ handleUserRegister, handleUserEnter }: AuthProps) {
  return (
    <div className="App-auth">
      <Nav date={new Date()} />
      <AppEnter
        handleUserRegister={handleUserRegister}
        handleUserEnter={handleUserEnter}
      />
    </div>
  );
}

export default Auth;
