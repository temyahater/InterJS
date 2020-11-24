import { database } from "../services/Firebase/Firebase";

export interface StateApp {
  loadUser: Function;
}

export interface StateList {
  tasks: Array<Array<object>>;
  user: string;
  dispatch: Function;
}

export interface StateSubmit {
  user: string;
}

export interface StateObject {
  user: string;
  tasks: Array<Array<Object>>;
  database: typeof database;
}

export interface StoreObject {
  type: string;
  data: object;
  tasks: Array<Array<object>>;
  user: string;
}

export interface DataUser {
  user: string;
}

export interface TasksSubmitProps {
  database: typeof database;
}

export interface AppEnterProps {
  enterUser: Function;
  registerUser: Function;
  redirectUser: Function;
}

export interface AppExitProps {
  userExit: Function;
}

export interface TasksViewProps {
  database: typeof database;
}

export interface SubmitTaskProps {
  database: typeof database;
  user: string;
  redirectUser: Function;
}

export interface TaskAddProps {
  redirectUser: Function;
}

export interface NavProps {
  date: Date;
}

export interface ListProps {
  tasks: Array<Array<Object>>;
  user: string;
  dispatch: Function;
  database: typeof database;
  loadTasks: Function;
}

export interface User {
  email: string;
  password: string;
}

interface Task {
  id?: string;
  date?: string;
  task?: string;
}

export interface ListElementProps {
  key: string;
  databaseTaskId: string;
  task: Task;
  handleTaskDeleteClick: Function;
}
