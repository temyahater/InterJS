import React from "react";
import { ListElementProps } from "../interfaces";

const ListElement = (props: ListElementProps) => {
  return (
    <div className="list-element">
      <div className="list-element-date">{props.task.date}</div>
      <div className="list-element-task">
        <div>{props.task.task}</div>
        <div
          className="list-element-remove"
          onClick={() => props.deleteClick(props.databaseTaskId)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default ListElement;
