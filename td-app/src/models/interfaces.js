export interface TasksSubmitProps {
  user: String;
  database: Object;
}

export interface TaskAddProps {
  history: Object;
}

export interface AppEnterProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
  history: Object;
}

export interface AppExitProps {
  handleUserOut: Function;
  history: Object;
}

export interface AuthProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
}

export interface TasksViewProps {
  user: String;
  database: Object;
  tasks: Array;
  handleUserOut: Function;
  setTasks: Function;
}

export interface SubmitTaskProps {
  user: String;
  database: Object;
}

export interface NavProps {
  date: Date;
}

export interface ListProps {
  tasks: Array;
  user: String;
  database: Object;
  setTasks: Function;
}

export interface ListElementProps {
  databaseTaskId: String;
  task: Object;
  database: Object;
  handleTaskDeleteClick: Function;
}
