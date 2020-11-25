import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { TaskAddProps } from "../../models/interfaces";
import { submitURL } from "../../services/Database/database-calls";
import { userRedirectRequestAction } from "../../store/actions/user-redirect-request";
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
      <button type="button" onClick={handleAddTaskClick}>
        + Task
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    redirectUser: bindActionCreators(userRedirectRequestAction, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withRouter(TaskAdd));
