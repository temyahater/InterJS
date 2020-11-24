import * as React from "react";
import List from "../List/List";
import Nav from "../Nav/Nav";
import TaskAdd from "../TaskAdd/TaskAdd";
import { TasksViewProps } from "../../models/interfaces";
import AppExit from "../AppExit/AppExit";

function TasksView({ database }: TasksViewProps) {
  return (
    <div className="App">
      <Nav date={new Date()} />
      <TaskAdd />
      <List database={database} />
      <AppExit />
    </div>
  );
}

export default TasksView;
