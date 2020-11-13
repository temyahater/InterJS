const List=props=>{

    return (
    <div className="list">
    {
        props.tasks.map(e=>
            <div className="list-element" key={e.id}>
                <div className="list-element-date">{e.date}</div>
                <div className="list-element-task">
                    <div>{e.task}</div>
                    <div className="list-element-remove" onClick={()=>{
                        const taskFilter=props.tasks.filter(el=>el.id!==e.id)
                        props.handleTasksClick(taskFilter);
                    }}>X</div>
                </div>
            </div>
      )
    }
    </div>
    );
  }
  
  export default List;
  