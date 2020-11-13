import ListElement from "./ListElement";

const List=props=>{

    const handleClickDelete=task=>{
        const taskFilter=props.tasks.filter(e=>e.id!==task.id)
        props.updateTasks(taskFilter);
    }

    return (
    <div className="list">
    {
        props.tasks.map(task=><ListElement key={task.id} deleteClick={handleClickDelete} task={task}/>)
    }
    </div>
    );
  }
  
  export default List;
  