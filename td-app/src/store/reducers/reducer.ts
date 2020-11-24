import { StateObject, StoreObject } from "../../models/interfaces";
import { database } from "../../services/Firebase/Firebase";

const typeUser = "USER_UPDATE";
const typeTask = "TASKS_UPDATE";

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
    case typeUser:
      return { ...state, user: action.user };
    case typeTask:
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
}
