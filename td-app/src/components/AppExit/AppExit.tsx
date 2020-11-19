import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppExitProps } from "../../models/interfaces";
import "./AppExit.css";

const AppExit = ({
  handleUserOut,
  history,
}: AppExitProps & RouteComponentProps) => {
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