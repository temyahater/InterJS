import React from "react";
import ListElement from "./ListElement";
import { ListProps } from "../interfaces";

const List = (props: ListProps) => {
  return (
    <div className="list">
      {props.tasks.map((task) => (
        <ListElement
          key={task[0]}
          databaseTaskId={task[0]}
          deleteClick={props.updateTasks}
          task={task[1]}
        />
      ))}
    </div>
  );
};

export default List;
