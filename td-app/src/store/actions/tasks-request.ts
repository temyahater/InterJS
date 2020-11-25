export const type = "TASKS_REQUEST";

export function tasksRequestAction(database: object, user: string) {
  return { type, database, user };
}
