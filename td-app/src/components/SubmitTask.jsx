const SubmitTask=props=>{

    const handleClickSubmit=()=>{
        const taskText=document.getElementById('task').value.trim();
        if(taskText){
            const date=new Date();
            const taskSubmit={
                id:date.getTime(),
                date:date.toLocaleDateString(),
                task:taskText
            };
            props.submitTask(taskSubmit);
        }
        document.getElementById('task').value=''; //polnoe gg
    }

    const handlePressSubmit=key=>{
        if(key.code==='Enter'){
            handleClickSubmit();
        }
    }

    return (
      <div className="submit-task">
          <div className="submit-input">
              <input id="task" maxLength="45" onKeyPress={handlePressSubmit} />
          </div>
          <div className="submit-buttons">
              <button onClick={handleClickSubmit}>Add</button>
          </div>
      </div>
    );
  }
  
  export default SubmitTask;
  