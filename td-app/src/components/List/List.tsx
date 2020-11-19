import * as React from "react";
import ListElement from "../ListElement/ListElement";
import { ListProps } from "../../models/interfaces";
import "./List.css";

const List = ({ tasks, user, database, setTasks }: ListProps) => {
  const handleTaskDeleteClick = (id: string) => {
    database
      .ref("/users/" + user + "/tasks")
      .child(id)
      .remove()
      .then(() => handleTasksUpdate());
  };

  const handleTasksUpdate = React.useCallback(() => {
    database.ref("/users/" + user + "/tasks").on("value", (tasks) => {
      if (tasks.val()) {
        setTasks(Object.entries(tasks.val()));
      } else {
        setTasks([]);
      }
    });
  }, [database, setTasks, user]);

  React.useEffect(() => handleTasksUpdate(), [handleTasksUpdate]);

  return (
    <div className="list">
      {tasks.map((task: Array<Object>) => (
        <ListElement
          key={String(task[0])}
          databaseTaskId={String(task[0])}
          task={task[1]}
          handleTaskDeleteClick={handleTaskDeleteClick}
        />
      ))}
    </div>
  );
};

export default List;
