import React from "react";

const TaskAdd = () => {
  const handleAddTaskClick = () => {
    document.location.href = "http://localhost:3000/submit";
  };

  return (
    <div className="task-add">
      <div onClick={handleAddTaskClick}>+ Task</div>
    </div>
  );
};

export default TaskAdd;
