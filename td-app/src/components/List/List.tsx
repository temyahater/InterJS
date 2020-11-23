import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListProps, StateList } from "../../models/interfaces";
import tasksAction from "../../store/actions/tasks";
import ListElement from "../ListElement/ListElement";
import "./List.css";

const List = ({
  tasks, user, database, loadTasks,
}: ListProps) => {
  const handleTaskDeleteClick = (id: string) => {
    database
      .ref(`/users/${user}/tasks`)
      .child(id)
      .remove()
      .then(() => handleTasksUpdate());
  };

  const handleTasksUpdate = React.useCallback(() => {
    database.ref(`/users/${user}/tasks`).on("value", (data) => {
      if (data.val()) {
        loadTasks(Object.entries(data.val()));
      }
    });
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
  return { loadTasks: bindActionCreators(tasksAction, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
