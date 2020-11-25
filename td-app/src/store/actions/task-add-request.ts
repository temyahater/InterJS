import { Task } from "../../models/interfaces";

export const type = "TASK_ADD_REQUEST";

export function taskAddRequestAction(database: object, user: string, task: Task) {
  return {
    type, database, user, task,
  };
}
