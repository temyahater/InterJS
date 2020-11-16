import React from "react";
import PropTypes from "prop-types";

const Nav = (props) => {
  return (
    <div className="nav">
      <div>ToDoList</div>
      <div>Date: {props.date.toLocaleDateString()}</div>
    </div>
  );
};

Nav.propTypes = {
  date: PropTypes.object,
};

export default Nav;
