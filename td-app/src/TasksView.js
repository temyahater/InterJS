import React from 'react';
import './App.css';
import List from './components/List';
import Nav from './components/Nav';

function TasksView(props) {

  return (
    <div className="App">
      <Nav date={new Date()}/>
      <List updateTasks={props.handleTasksClick} tasks={props.tasks} />
    </div>
  );
}

export default TasksView;
