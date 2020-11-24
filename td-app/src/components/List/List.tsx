import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListProps, StateList } from "../../models/interfaces";
import { deleteTask } from "../../services/Database/database-calls";
import tasksRequsetAction from "../../store/actions/tasks-request";
import ListElement from "../ListElement/ListElement";
import "./List.css";

const List = ({
  tasks, user, database, loadTasks,
}: ListProps) => {
  const handleTaskDeleteClick = (id: string) => {
    deleteTask(database, user, id).then(() => handleTasksUpdate());
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
  return { loadTasks: bindActionCreators(tasksRequsetAction, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
