import { database } from "../services/Firebase/Firebase";

export interface TasksSubmitProps {
  user?: string;
  database: typeof database;
}

export interface AppEnterProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
}

export interface AppExitProps {
  handleUserOut: Function;
}

export interface AuthProps {
  handleUserRegister: Function;
  handleUserEnter: Function;
}

export interface TasksViewProps {
  user?: string;
  database: typeof database;
  tasks: Array<Array<Object>>;
  handleUserOut: Function;
  setTasks: Function;
}

export interface SubmitTaskProps {
  user?: string;
  database: typeof database;
}

export interface NavProps {
  date: Date;
}

export interface ListProps {
  tasks: Array<Array<Object>>;
  user?: string;
  database: typeof database;
  setTasks: Function;
}

export interface User {
  email?: string;
  password?: string;
}

interface Task {
  id?: string;
  date?: string;
  task?: string;
}

export interface ListElementProps {
  key?: string;
  databaseTaskId?: string;
  task: Task;
  handleTaskDeleteClick: Function;
}
