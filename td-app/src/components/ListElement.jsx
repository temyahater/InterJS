import React from "react";
import PropTypes from "prop-types";

const ListElement = (props) => {
  return (
    <div className="list-element">
      <div className="list-element-date">{props.task.date}</div>
      <div className="list-element-task">
        <div>{props.task.task}</div>
        {/* <div className="list-element-remove" onClick={props.deleteClick.bind(this,props.task)}>X</div> */}
        <div
          className="list-element-remove"
          onClick={() => props.deleteClick(props.databaseTaskId)}
        >
          X
        </div>
      </div>
    </div>
  );
};

ListElement.propTypes = {
  task: PropTypes.object,
  deleteClick: PropTypes.func,
  databaseTaskId: PropTypes.string,
};

export default ListElement;
