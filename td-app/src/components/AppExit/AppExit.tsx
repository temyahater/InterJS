import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { AppExitProps } from "../../models/interfaces";
import tasksAction from "../../store/actions/tasks";
import userAction from "../../store/actions/user";
import "./AppExit.css";

const AppExit = ({
  handleUserOut,
  history,
  clearTasks,
  clearUser,
}: AppExitProps & RouteComponentProps) => {
  const handleExitClick = () => {
    if (window.confirm("Are you shure?")) {
      handleUserOut(history);
      clearTasks([]);
      clearUser("");
    }
  };

  return (
    <div className="app-exit">
      <div role="button" onClick={handleExitClick} onKeyDown={handleExitClick} tabIndex={0}>Exit</div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    clearTasks: bindActionCreators(tasksAction, dispatch),
    clearUser: bindActionCreators(userAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(AppExit));
