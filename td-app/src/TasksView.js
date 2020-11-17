import React from "react";
import "./App.css";
import AppExit from "./components/AppExit";
import List from "./components/List";
import Nav from "./components/Nav";
import TaskAdd from "./components/TaskAdd";
import { TasksViewProps } from "./interfaces";

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
