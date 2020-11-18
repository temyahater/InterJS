import React from "react";
import { withRouter } from "react-router-dom";
import {
  handleLocationChange,
  submitURL,
} from "../../services/ConstsHandles/AppConsts";
import { TaskAddProps } from "../../models/interfaces";
import "./TaskAdd.css";

const TaskAdd = ({ history }: TaskAddProps) => {
  const handleAddTaskClick = () => {
    handleLocationChange(history, submitURL);
  };

  return (
    <div className="task-add">
      <div onClick={handleAddTaskClick}>+ Task</div>
    </div>
  );
};

export default withRouter(TaskAdd);
