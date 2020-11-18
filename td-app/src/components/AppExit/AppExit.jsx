import React from "react";
import { withRouter } from "react-router-dom";
import { AppExitProps } from "../../models/interfaces";
import "./AppExit.css";

const AppExit = ({ handleUserOut, history }: AppExitProps) => {
  const handleExitClick = () => {
    if (window.confirm("Are you shure?")) {
      handleUserOut(history);
    }
  };

  return (
    <div className="app-exit">
      <div onClick={handleExitClick}>Exit</div>
    </div>
  );
};

export default withRouter(AppExit);
