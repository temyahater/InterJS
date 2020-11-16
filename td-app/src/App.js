import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "firebase/database";
import "./App.css";
import TasksSubmit from "./TasksSubmit";
import TasksView from "./TasksView";
import database from "./FireBaseConfig"

function App() {
  const [tasks, setTasks] = useState([]);

  const handleTasksUpdate = () => {
    database.ref("/tasks").on("value", (tasks) => {
      if (tasks.val()) {
        setTasks(Object.entries(tasks.val()));
      } else {
        setTasks([]);
      }
    });
  };

  const handleTasksAddClick = (task) => {
    database.ref("/tasks").push().set(task);
    handleTasksUpdate();
  };

  const handleTaskDeleteClick = (id) => {
    database.ref("/tasks").child(id).remove();
    handleTasksUpdate();
  };

  useEffect(() => handleTasksUpdate(), []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <TasksView tasks={tasks} handleTasksClick={handleTaskDeleteClick} />
        </Route>
        <Route exact path="/submit">
          <TasksSubmit handleTasksClick={handleTasksAddClick} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
