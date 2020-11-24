const type = "TASKS_UPDATE";

export default function tasksAction(tasks: Array<Array<Object>>) {
  return { type, tasks };
}
