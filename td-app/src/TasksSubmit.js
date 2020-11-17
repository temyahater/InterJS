import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SubmitTask from "./components/SubmitTask";
import { TasksSubmitProps } from "./interfaces";

function TasksSubmit({ user, database }: TasksSubmitProps) {
  return (
    <div className="App-submit">
      <Nav date={new Date()} />
      <SubmitTask database={database} user={user} />
    </div>
  );
}

export default TasksSubmit;
