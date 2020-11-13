const Nav=props=>{

  return (
    <div className="nav">
        <div>ToDoList</div>
        <div>Date: {props.date.toLocaleDateString()}</div>
    </div>
  );
}

export default Nav;
