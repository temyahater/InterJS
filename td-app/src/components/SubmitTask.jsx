const SubmitTask=props=>{

    return (
      <div className="submit-task">
          <div className="submit-input">
              <input id="task" maxLength="45" />
          </div>
          <div className="submit-buttons">
              <button onClick={()=>{
                  const taskText=document.getElementById('task').value;
                  if(taskText){
                    const date=new Date();
                    const taskDate=date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear();
                    const taskSubmit={
                        id:date.getTime(),
                        date:taskDate,
                        task:taskText
                    };
                    props.handleTasksClick([...props.tasks,taskSubmit]);
                    document.getElementById('task').value='';
                  }
                  }}>Add</button>
          </div>
      </div>
    );
  }
  
  export default SubmitTask;
  