import React from "react";
import List from "../List/List";
import Nav from "../Nav/Nav";
import TaskAdd from "../TaskAdd/TaskAdd";
import { TasksViewProps } from "../../models/interfaces";
import AppExit from "../AppExit/AppExit";

function TasksView({
  tasks,
  user,
  database,
  handleUserOut,
  setTasks,
}: TasksViewProps) {
  return (
    <div className="App">
      <Nav date={new Date()} />
      <TaskAdd />
      <List tasks={tasks} user={user} database={database} setTasks={setTasks} />
      <AppExit handleUserOut={handleUserOut} />
    </div>
  );
}

export default TasksView;
