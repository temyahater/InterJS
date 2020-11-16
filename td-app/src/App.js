import React, { useState, useEffect } from 'react';
import { Switch, Route , BrowserRouter } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/database";
import './App.css';
import TasksSubmit from './TasksSubmit';
import TasksView from './TasksView';

const firebaseConfig = {
  apiKey: "AIzaSyAjNpfWV8tMY6o3NshOo5G87hTA3EYT6Ck",
  authDomain: "todoapp-b04ba.firebaseapp.com",
  databaseURL: "https://todoapp-b04ba.firebaseio.com",
  projectId: "todoapp-b04ba",
  storageBucket: "todoapp-b04ba.appspot.com",
  messagingSenderId: "324915185846",
  appId: "1:324915185846:web:06faeacc897a5c75bdbe17"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const database=firebase.database();

function App() {

  const [tasks,setTasks]=useState([]);

  const handleTasksUpdate=()=>{
    database.ref('/tasks').on('value',tasks=>{
      if(tasks.val()){
        setTasks(Object.entries(tasks.val()));
      }
      else{
        setTasks([]);
      }
    })
  }

  const handleTasksAddClick=task=>{
    database.ref('/tasks').push().set(task);
    handleTasksUpdate();
  }

  const handleTaskDeleteClick=id=>{
    database.ref('/tasks').child(id).remove();
    handleTasksUpdate();
  }

  useEffect(()=>handleTasksUpdate(),[])

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/tasks' >
          <TasksView tasks={tasks} handleTasksClick={handleTaskDeleteClick} />
        </Route>
        <Route path='/submit'>
          <TasksSubmit handleTasksClick={handleTasksAddClick} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
