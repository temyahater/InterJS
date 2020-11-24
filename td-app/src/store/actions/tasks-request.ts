export default function tasksRequsetAction(database: object, user: string) {
  return { type: "TASKS_REQUEST", database, user };
}
