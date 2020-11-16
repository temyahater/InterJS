const ListElement=props=>{

    return (
    <div className="list-element">
        <div className="list-element-date">{props.task.date}</div>
        <div className="list-element-task">
            <div>{props.task.task}</div>
            {/* <div className="list-element-remove" onClick={props.deleteClick.bind(this,props.task)}>X</div> */}
            <div className="list-element-remove" onClick={()=>props.deleteClick(props.databaseTaskId)}>X</div>
        </div>
    </div>
    );
  }
  
  export default ListElement;
  