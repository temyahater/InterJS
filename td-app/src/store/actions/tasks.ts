export const typeTasks = "TASKS_UPDATE";

export function tasksAction(tasks: Array<Array<Object>>) {
  return { type: typeTasks, tasks };
}
