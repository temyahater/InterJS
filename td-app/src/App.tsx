import * as React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { database, auth } from "./services/Firebase/Firebase";
import {
  handleUserRegister,
  handleUserEnter,
  handleUserOut,
} from "./services/ConstsHandles/AppConsts";
import "./App.css";
import TasksSubmit from "./components/TaskSubmit/TasksSubmit";
import TasksView from "./components/TaskView/TasksView";
import Auth from "./components/Auth/Auth";
import { StateApp } from "./models/interfaces";

function App(props: any) {
  const handleUserUpdate = React.useCallback(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        props.dispatch({
          type: "USER_UPDATE",
          data: { user: currentUser.uid },
        });
      }
    });
  }, [props]);

  React.useEffect(() => handleUserUpdate(), [handleUserUpdate]);

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
          <TasksView database={database} handleUserOut={handleUserOut} />
        </Route>
        <Route exact path="/submit">
          <TasksSubmit database={database} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

function mapStateToProps(state: StateApp) {
  return { dispatch: state.dispatch };
}

export default connect(mapStateToProps)(App);
