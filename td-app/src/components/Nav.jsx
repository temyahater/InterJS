import React from "react";
import { NavProps } from "../interfaces";

const Nav = (props: NavProps) => {
  return (
    <div className="nav">
      <div>ToDoList</div>
      <div>Date: {props.date.toLocaleDateString()}</div>
    </div>
  );
};

export default Nav;
