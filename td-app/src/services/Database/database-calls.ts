/* eslint-disable no-unused-vars */
export function getTasks(database: any, user: string) {
  return database.ref(`/users/${user}/tasks`).once("value").then((data: object) => data);
}

export const deleteTask = (database: any, user: string, id: string) => database
  .ref(`/users/${user}/tasks`)
  .child(id)
  .remove();

// eslint-disable-next-line max-len
export const getUser = (auth: any) => new Promise((res, rej) => auth.onAuthStateChanged((user: any) => (user ? res(user.uid) : "")));
