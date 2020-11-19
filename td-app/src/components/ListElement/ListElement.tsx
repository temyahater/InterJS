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
      <div
        role="button"
        tabIndex={0}
        className="list-element-remove"
        onClick={() => handleTaskDeleteClick(databaseTaskId)}
        onKeyDown={() => handleTaskDeleteClick(databaseTaskId)}
      >
        X
      </div>
    </div>
  </div>
);

export default ListElement;
