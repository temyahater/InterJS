import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { StateSubmit, SubmitTaskProps } from "../../models/interfaces";
import { tasksURL } from "../../services/Database/database-calls";
import { taskAddRequestAction } from "../../store/actions/task-add-request";
import { userRedirectRequestAction } from "../../store/actions/user-redirect-request";
import "./SubmitTask.css";

const SubmitTask = ({
  database,
  history,
  user,
  redirectUser,
  addTask,
}: SubmitTaskProps & RouteComponentProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputValue = (event: { target: HTMLInputElement }) => {
    setInputValue(event.target.value);
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
      addTask(database, user, taskSubmit);
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
      if (window.confirm("Are you sure? Input is not empty.")) {
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
    redirectUser: bindActionCreators(userRedirectRequestAction, dispatch),
    addTask: bindActionCreators(taskAddRequestAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(SubmitTask));
