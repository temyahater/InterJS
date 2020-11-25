import * as React from "react";
import { ListElementProps } from "../../models/interfaces";
import "./ListElement.css";

const ListElement = ({
  databaseTaskId,
  task,
  handleTaskDeleteClick,
}: ListElementProps) => (
  <div className="list-element">
    <div className="list-element-date">{task.date}</div>
    <div className="list-element-task">
      <div>{task.task}</div>
      <button
        type="button"
        className="list-element-remove"
        onClick={() => handleTaskDeleteClick(databaseTaskId)}
      >
        X
      </button>
    </div>
  </div>
);

export default ListElement;
