import React from "react";
import { AppExitProps } from "../interfaces";

const AppExit = (props: AppExitProps) => {
  const handleExitClick = () => {
    if (window.confirm("Are you shure?")) {
      props.handleUserOut();
    }
  };

  return (
    <div className="app-exit">
      <div onClick={handleExitClick}>Exit</div>
    </div>
  );
};

export default AppExit;
