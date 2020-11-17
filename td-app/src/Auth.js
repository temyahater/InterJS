import React from "react";
import "./App.css";
import AppEnter from "./components/AppEnter";
import Nav from "./components/Nav";
import { AuthProps } from "./interfaces";

function Auth(props: AuthProps) {
  return (
    <div className="App-auth">
      <Nav date={new Date()} />
      <AppEnter
        handleUserRegister={props.handleUserRegister}
        handleUserEnter={props.handleUserEnter}
      />
    </div>
  );
}

export default Auth;
