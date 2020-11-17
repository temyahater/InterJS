import React from "react";
import "./App.css";
import AppEnter from "./components/AppEnter";
import Nav from "./components/Nav";
import { AuthProps } from "./interfaces";

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
