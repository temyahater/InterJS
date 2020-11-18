import React, { useEffect, useCallback } from "react";
import ListElement from "./ListElement";
import { ListProps } from "../interfaces";

const List = ({ tasks, user, database, setTasks }: ListProps) => {
  const handleTaskDeleteClick = (id) => {
    database
      .ref("/users/" + user + "/tasks")
      .child(id)
      .remove()
      .then(() => handleTasksUpdate());
  };

  const handleTasksUpdate = useCallback(() => {
    database.ref("/users/" + user + "/tasks").on("value", (tasks) => {
      if (tasks.val()) {
        setTasks(Object.entries(tasks.val()));
      } else {
        setTasks([]);
      }
    });
  }, [database, setTasks, user]);

  useEffect(() => handleTasksUpdate(), [handleTasksUpdate]);

  return (
    <div className="list">
      {tasks.map((task) => (
        <ListElement
          key={task[0]}
          databaseTaskId={task[0]}
          task={task[1]}
          database={database}
          handleTaskDeleteClick={handleTaskDeleteClick}
        />
      ))}
    </div>
  );
};

export default List;
