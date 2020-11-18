import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { SubmitTaskProps } from "../../models/interfaces";
import {
  handleLocationChange,
  tasksURL,
} from "../../services/ConstsHandles/AppConsts";
import "./SubmitTask.css";

const SubmitTask = ({ user, database, history }: SubmitTaskProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleTasksAddClick = (task) => {
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

  const handlePressSubmit = (key) => {
    if (key.code === "Enter") {
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
          maxLength="45"
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
