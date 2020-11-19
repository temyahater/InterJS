import * as React from "react";
import { NavProps } from "../../models/interfaces";
import "./Nav.css";

const Nav = ({ date }: NavProps) => {
  return (
    <div className="nav">
      <div>ToDoList</div>
      <div>Date: {date.toLocaleDateString()}</div>
    </div>
  );
};

export default Nav;
