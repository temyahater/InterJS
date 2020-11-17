import React from "react";
import "./App.css";
import AppExit from "./components/AppExit";
import List from "./components/List";
import Nav from "./components/Nav";
import TaskAdd from "./components/TaskAdd";
import { TasksViewProps } from "./interfaces";

function TasksView(props: TasksViewProps) {
  return (
    <div className="App">
      <Nav date={new Date()} />
      <TaskAdd />
      <List updateTasks={props.handleTasksClick} tasks={props.tasks} />
      <AppExit handleUserOut={props.handleUserOut} />
    </div>
  );
}

export default TasksView;
