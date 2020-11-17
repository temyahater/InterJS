import React from "react";
import { ListElementProps } from "../interfaces";

const ListElement = ({
  databaseTaskId,
  task,
  database,
  handleTaskDeleteClick,
}: ListElementProps) => {
  return (
    <div className="list-element">
      <div className="list-element-date">{task.date}</div>
      <div className="list-element-task">
        <div>{task.task}</div>
        <div
          className="list-element-remove"
          onClick={() => handleTaskDeleteClick(databaseTaskId)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default ListElement;
