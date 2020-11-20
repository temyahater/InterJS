import { DataTask, StateObject } from "../../models/interfaces";

function tasksAction(state: StateObject, data: DataTask | any) {
  return { ...state, tasks: data.tasks };
}
export default tasksAction;
