import { database } from "../services/Firebase/Firebase";

export interface StateApp {
  dispatch: Function;
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
  user?: string;
  tasks: Array<Array<Object>>;
  database: typeof database;
}

export interface StoreObject {
  type: string;
  data: object;
}

export interface DataUser {
  user?: string;
}

export interface DataTask {
  tasks: Array<Array<Object>>;
}

export interface TasksSubmitProps {
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
  database: typeof database;
  handleUserOut: Function;
}

export interface SubmitTaskProps {
  database: typeof database;
  user: string;
}

export interface NavProps {
  date: Date;
}

export interface ListProps {
  tasks: Array<Array<Object>>;
  user: string;
  dispatch: Function;
  database: typeof database;
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
