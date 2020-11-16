import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import List from "./components/List";
import Nav from "./components/Nav";
import TaskAdd from "./components/TaskAdd";

function TasksView(props) {
  return (
    <div className="App">
      <Nav date={new Date()} />
      <TaskAdd />
      <List updateTasks={props.handleTasksClick} tasks={props.tasks} />
    </div>
  );
}

TasksView.propTypes = {
  handleTasksClick: PropTypes.func,
  tasks: PropTypes.array,
};

export default TasksView;
