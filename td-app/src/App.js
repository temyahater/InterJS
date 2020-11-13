import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Nav from './components/Nav';
import SubmitTask from './components/SubmitTask';

function App() {

  function handleTasksClick(task){
    setTasks(task);
    // alert('Tasks updated');
  }

  const [tasks,setTasks]=useState([{id:1,date:'12.11.2020',task:'Don\'t go to the army'}]);
  const date=new Date();

  return (
    <div className="App">
      <Nav date={date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()}/>
      <List handleTasksClick={handleTasksClick} tasks={tasks} />
      <SubmitTask handleTasksClick={handleTasksClick} tasks={tasks} />
    </div>
  );
}

export default App;
