import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { SubmitTaskProps } from "../../models/interfaces";
import {
  handleLocationChange,
  tasksURL,
} from "../../services/ConstsHandles/AppConsts";
import "./SubmitTask.css";

const SubmitTask = ({
  user,
  database,
  history,
}: SubmitTaskProps & RouteComponentProps) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputValue = (event: { target: HTMLInputElement }) => {
    setInputValue(event.target.value);
  };

  const handleTasksAddClick = (task: Object) => {
    database
      .ref("/users/" + user + "/tasks")
      .push()
      .set(task);
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
        handleLocationChange(history, tasksURL);
      }
    } else {
      handleLocationChange(history, tasksURL);
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
        <button onClick={handleClickSubmit}>Add</button>
        <button onClick={handleViewTasks}>View tasks</button>
      </div>
    </div>
  );
};

export default withRouter(SubmitTask);
