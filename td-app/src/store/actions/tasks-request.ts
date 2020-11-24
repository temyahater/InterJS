const type = "TASKS_REQUEST";

export default function tasksRequsetAction(database: object, user: string) {
  return { type, database, user };
}
