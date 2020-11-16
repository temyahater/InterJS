import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import Nav from "./components/Nav";
import SubmitTask from "./components/SubmitTask";

function TasksSubmit(props) {
  return (
    <div className="App-submit">
      <Nav date={new Date()} />
      <SubmitTask submitTask={props.handleTasksClick} />
    </div>
  );
}

TasksSubmit.propTypes = {
  handleTasksClick: PropTypes.func,
};

export default TasksSubmit;
