export default function tasksAction(tasks: Array<Array<Object>>) {
  return { type: "TASKS_UPDATE", tasks };
}
