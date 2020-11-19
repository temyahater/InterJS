import * as React from "react";
import Nav from "../Nav/Nav";
import SubmitTask from "../SubmitTask/SubmitTask";
import { TasksSubmitProps } from "../../models/interfaces";
import "./TasksSubmit.css";

function TasksSubmit({ user, database }: TasksSubmitProps) {
  return (
    <div className="App-submit">
      <Nav date={new Date()} />
      <SubmitTask database={database} user={user} />
    </div>
  );
}

export default TasksSubmit;
