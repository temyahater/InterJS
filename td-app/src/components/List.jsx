import React from "react";
import PropTypes from "prop-types";
import ListElement from "./ListElement";

const List = (props) => {
  return (
    <div className="list">
      {props.tasks.map((task) => (
        <ListElement
          key={task[0]}
          databaseTaskId={task[0]}
          deleteClick={props.updateTasks}
          task={task[1]}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  tasks: PropTypes.array,
  updateTasks: PropTypes.func,
};

export default List;
