export const type = "TASK_DELETE_REQUEST";

export function taskDeleteRequestAction(database: object, user: string, id: string) {
  return {
    type, database, user, id,
  };
}
