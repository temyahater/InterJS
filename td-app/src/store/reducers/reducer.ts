import userAction from "../actions/user";
import { StoreObject, StateObject } from "../../models/interfaces";
import { database } from "../../services/Firebase/Firebase";
import tasksAction from "../actions/tasks";

const initialState = {
  user: "",
  tasks: [],
  database,
};

// problem with initial params es6 , ts error

export default function reducer(state: StateObject | undefined, action: StoreObject) {
  if (state === undefined) {
    return initialState;
  }
  switch (action.type) {
    case "USER_UPDATE":
      return userAction(state, action.data);
    case "TASKS_UPDATE":
      return tasksAction(state, action.data);
    default:
      return state;
  }
}
