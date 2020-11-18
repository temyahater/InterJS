import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { database } from "./services/Firebase/Firebase";
import { auth } from "./services/Firebase/Firebase";
import {
  handleUserRegister,
  handleUserEnter,
  handleUserOut,
} from "./services/ConstsHandles/AppConsts";
import "./App.css";
import TasksSubmit from "./components/TaskSubmit/TasksSubmit";
import TasksView from "./components/TaskView/TasksView";
import Auth from "./components/Auth/Auth";

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState("");

  const handleUserUpdate = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.uid);
      }
    });
  };

  useEffect(() => handleUserUpdate(), []);

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
            user={user}
            database={database}
            handleUserOut={handleUserOut}
            setTasks={setTasks}
          />
        </Route>
        <Route exact path="/submit">
          <TasksSubmit database={database} user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
