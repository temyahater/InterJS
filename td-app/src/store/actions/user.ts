import { DataUser, StateObject } from "../../models/interfaces";

function userAction(state: StateObject, data: DataUser) {
  return { ...state, user: data.user };
}
export default userAction;
