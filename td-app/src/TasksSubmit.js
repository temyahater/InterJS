import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SubmitTask from "./components/SubmitTask";
import { TasksSubmitProps } from "./interfaces";

function TasksSubmit(props: TasksSubmitProps) {
  return (
    <div className="App-submit">
      <Nav date={new Date()} />
      <SubmitTask submitTask={props.handleTasksClick} />
    </div>
  );
}

export default TasksSubmit;
