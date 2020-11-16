import React, { useState } from "react";
import PropTypes from "prop-types";

const SubmitTask = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = () => {
    setInputValue(document.getElementById("task").value);
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
      props.submitTask(taskSubmit);
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
        document.location.href = "http://localhost:3000";
      }
    } else {
      document.location.href = "http://localhost:3000";
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

SubmitTask.propTypes = {
  submitTask: PropTypes.func,
};

export default SubmitTask;
