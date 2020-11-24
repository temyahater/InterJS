import * as React from "react";
import AppEnter from "../AppEnter/AppEnter";
import Nav from "../Nav/Nav";
import "./Auth.css";

function Auth() {
  return (
    <div className="App-auth">
      <Nav date={new Date()} />
      <AppEnter />
    </div>
  );
}

export default Auth;
