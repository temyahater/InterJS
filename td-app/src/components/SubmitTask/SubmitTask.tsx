import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { StateSubmit, SubmitTaskProps } from "../../models/interfaces";
import { tasksURL } from "../../services/Database/database-calls";
import userRedirectRequsetAction from "../../store/actions/user-redirect-request";
import "./SubmitTask.css";

const SubmitTask = ({
  database,
  history,
  user,
  redirectUser,
}: SubmitTaskProps & RouteComponentProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputValue = (event: { target: HTMLInputElement }) => {
    setInputValue(event.target.value);
  };

  const handleTasksAddClick = (task: Object) => {
    database.ref(`/users/${user}/tasks`).push().set(task);
  };

  const handleClickSubmit = () => {
    const taskText = inputValue.trim();
    if (taskText) {
      const date = new Date();
      const taskSubmit = {
        id: date.getTime(),
        date: date.toLocaleDateString(),
        task: taskText,
      };
      handleTasksAddClick(taskSubmit);
    }
    setInputValue("");
  };

  const handlePressSubmit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleClickSubmit();
    }
  };

  const handleViewTasks = () => {
    if (inputValue) {
      if (window.confirm("Are you shure? Input is not empty.")) {
        redirectUser(history, tasksURL);
      }
    } else {
      redirectUser(history, tasksURL);
    }
  };

  return (
    <div className="submit-task">
      <div className="submit-input">
        <input
          maxLength={45}
          onKeyPress={handlePressSubmit}
          value={inputValue}
          onChange={handleInputValue}
        />
      </div>
      <div className="submit-buttons">
        <button type="button" onClick={handleClickSubmit}>
          Add
        </button>
        <button type="button" onClick={handleViewTasks}>
          View tasks
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state: StateSubmit) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch: any) {
  return {
    redirectUser: bindActionCreators(userRedirectRequsetAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SubmitTask));
