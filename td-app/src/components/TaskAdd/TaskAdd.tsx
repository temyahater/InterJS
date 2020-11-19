import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  handleLocationChange,
  submitURL,
} from "../../services/ConstsHandles/AppConsts";
import "./TaskAdd.css";

const TaskAdd = ({ history }: RouteComponentProps) => {
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
