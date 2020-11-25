import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListProps, StateList } from "../../models/interfaces";
import { taskDeleteRequestAction } from "../../store/actions/task-delete-request";
import { tasksRequestAction } from "../../store/actions/tasks-request";
import ListElement from "../ListElement/ListElement";
import "./List.css";

const List = ({
  tasks, user, database, loadTasks, deleteTask,
}: ListProps) => {
  const handleTaskDeleteClick = (id: string) => {
    deleteTask(database, user, id);
    handleTasksUpdate();
  };

  const handleTasksUpdate = React.useCallback(() => {
    loadTasks(database, user);
  }, [database, user, loadTasks]);

  React.useEffect(() => handleTasksUpdate(), [handleTasksUpdate]);

  return (
    <div className="list">
      {tasks.map((task: Array<Object>) => (
        <ListElement
          key={String(task[0])}
          databaseTaskId={String(task[0])}
          task={task[1]}
          handleTaskDeleteClick={handleTaskDeleteClick}
        />
      ))}
    </div>
  );
};

function mapStateToProps(state: StateList) {
  return { ...state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    loadTasks: bindActionCreators(tasksRequestAction, dispatch),
    deleteTask: bindActionCreators(taskDeleteRequestAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
