export interface TasksSubmitProps {
  handleTasksClick: Function;
}

export interface AppEnterProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
}

export interface AppExitProps {
  handleExitClick: Function;
}

export interface AuthProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
}

export interface TasksViewProps {
  handleTasksClick: Function;
  tasks: Array;
  handleUserOut: Function;
}

export interface SubmitTaskProps {
  submitTask: Function;
}

export interface NavProps {
  submitTask: Function;
}

export interface ListProps {
  tasks: Array;
  updateTasks: Function;
}

export interface ListElementProps {
  tasks: Object;
  deleteClick: Function;
  databaseTaskId: String;
}
