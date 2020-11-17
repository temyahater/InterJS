import React, { useState } from "react";
import { SubmitTaskProps } from "../interfaces";

const SubmitTask = ({ user, database }: SubmitTaskProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = () => {
    setInputValue(document.getElementById("task").value);
  };

  const handleTasksAddClick = (task) => {
    database
      .ref("/users/" + user + "/tasks")
      .push()
      .set(task);
  };

  const handleClickSubmit = () => {
    handleInputValue();
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
        document.location.href = "http://localhost:3000/tasks";
      }
    } else {
      document.location.href = "http://localhost:3000/tasks";
    }
  };

  return (
    <div className="submit-task">
      <div className="submit-input">
        <input
          id="task"
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

export default SubmitTask;
