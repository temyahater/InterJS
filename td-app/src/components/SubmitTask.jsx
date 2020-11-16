import React, { useState } from "react";
import PropTypes from "prop-types";

const SubmitTask = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = () => {
    setInputValue(document.getElementById("task").value.trim());
  };

  const handleClickSubmit = () => {
    handleInputValue();
    if (inputValue) {
      const date = new Date();
      const taskSubmit = {
        id: date.getTime(),
        date: date.toLocaleDateString(),
        task: inputValue,
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
      </div>
    </div>
  );
};

SubmitTask.propTypes = {
  submitTask: PropTypes.func,
};

export default SubmitTask;
