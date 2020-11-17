import React, { useEffect } from "react";
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

  const handleTasksUpdate = () => {
    console.log(user);
    database.ref("/users/" + user + "/tasks").on("value", (tasks) => {
      if (tasks.val()) {
        setTasks(Object.entries(tasks.val()));
      } else {
        setTasks([]);
      }
    });
  };

  useEffect(() => handleTasksUpdate(), [user]);

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
