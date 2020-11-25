import { StateObject, StoreObject } from "../../models/interfaces";
import { database } from "../../services/Firebase/Firebase";
import { typeUser } from "../actions/user";
import { typeTasks } from "../actions/tasks";

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
    case typeTasks:
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
}
