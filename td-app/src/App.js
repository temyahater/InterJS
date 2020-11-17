import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { database } from "./FireBaseConfig";
import { auth } from "./FireBaseConfig";
import "./App.css";
import TasksSubmit from "./TasksSubmit";
import TasksView from "./TasksView";
import Auth from "./Auth";

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState("");

  const handleUserRegister = (user) => {
    auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => (document.location.href = "http://localhost:3000/tasks"))
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUserEnter = (user) => {
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => (document.location.href = "http://localhost:3000/tasks"))
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUserOut = () => {
    auth
      .signOut()
      .then(() => (document.location.href = "http://localhost:3000"))
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUserUpdate = () => {
    setUser(auth.X);
  };

  const handleTasksUpdate = () => {
    database.ref("/users/" + user + "/tasks").on("value", (tasks) => {
      if (tasks.val()) {
        setTasks(Object.entries(tasks.val()));
      } else {
        setTasks([]);
      }
    });
  };

  const handleTasksAddClick = (task) => {
    database
      .ref("/users/" + user + "/tasks")
      .push()
      .set(task)
      .then(() => handleTasksUpdate());
  };

  const handleTaskDeleteClick = (id) => {
    database
      .ref("/users/" + user + "/tasks")
      .child(id)
      .remove()
      .then(() => handleTasksUpdate());
  };

  useEffect(() => {
    handleUserUpdate();
    handleTasksUpdate();
  }, [auth.X, user]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Auth
            handleUserRegister={handleUserRegister}
            handleUserEnter={handleUserEnter}
          />
        </Route>
        <Route exact path="/tasks">
          <TasksView
            tasks={tasks}
            handleTasksClick={handleTaskDeleteClick}
            handleUserOut={handleUserOut}
          />
        </Route>
        <Route exact path="/submit">
          <TasksSubmit handleTasksClick={handleTasksAddClick} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
