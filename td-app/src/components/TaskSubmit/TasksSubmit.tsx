import * as React from "react";
import Nav from "../Nav/Nav";
import SubmitTask from "../SubmitTask/SubmitTask";
import { TasksSubmitProps } from "../../models/interfaces";
import "./TasksSubmit.css";

function TasksSubmit({ database }: TasksSubmitProps) {
  return (
    <div className="App-submit">
      <Nav date={new Date()} />
      <SubmitTask database={database} />
    </div>
  );
}

export default TasksSubmit;
