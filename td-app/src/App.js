import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Nav from './components/Nav';
import SubmitTask from './components/SubmitTask';

function App() {

  const handleTasksClick=task=>{
    setTasks(task);
  }

  const [tasks,setTasks]=useState([{id:1,date:'12.11.2020',task:'Don\'t go to the army'}]);

  return (
    <div className="App">
      <Nav date={new Date()}/>
      <List updateTasks={handleTasksClick} tasks={tasks} />
      <SubmitTask submitTask={handleTasksClick} tasks={tasks} />
    </div>
  );
}

export default App;
