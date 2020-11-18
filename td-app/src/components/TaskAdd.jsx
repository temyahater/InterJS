import React from "react";
import { withRouter } from "react-router-dom";
import { handleLocationChange, submitURL } from "../AppConsts";
import { TaskAddProps } from "../interfaces";

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
