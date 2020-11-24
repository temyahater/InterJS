import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { TaskAddProps } from "../../models/interfaces";
import { submitURL } from "../../services/Database/database-calls";
import userRedirectRequsetAction from "../../store/actions/user-redirect-request";
import "./TaskAdd.css";

const TaskAdd = ({
  history,
  redirectUser,
}: TaskAddProps & RouteComponentProps) => {
  const handleAddTaskClick = () => {
    redirectUser(history, submitURL);
  };

  return (
    <div className="task-add">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={handleAddTaskClick}
        onClick={handleAddTaskClick}
      >
        + Task
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    redirectUser: bindActionCreators(userRedirectRequsetAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(TaskAdd));
