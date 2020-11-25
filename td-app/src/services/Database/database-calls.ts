import { History } from "history";
import { Task, User } from "../../models/interfaces";

export const tasksURL = "/tasks";
export const submitURL = "/submit";
const authURL = "/";

export function getTasks(database: any, user: string) {
  return database.ref(`/users/${user}/tasks`).once("value").then((data: object) => data);
}

export const handleTaskDelete = (database: any, user: string, id: string) => database
  .ref(`/users/${user}/tasks`)
  .child(id)
  .remove()
  .catch((err: Error) => alert(err.message));

export const handleTasksAddClick = (database: any, user: string, task: Task) => {
  database.ref(`/users/${user}/tasks`).push().set(task);
};

// eslint-disable-next-line no-unused-vars
export const getUser = (auth: any) => new Promise((res, rej) => auth
  .onAuthStateChanged((user: any) => (user ? res(user.uid) : "")));

export const handleUserRegister = (auth: any, user: User) => auth
  .createUserWithEmailAndPassword(user.email || "", user.password || "")
  .catch((err: Error) => alert(err.message));

export const handleUserEnter = (auth: any, user: User) => auth
  .signInWithEmailAndPassword(user.email || "", user.password || "")
  .catch((err: Error) => alert(err.message));

export const handleUserOut = (auth: any, history: History) => auth
  .signOut()
  .then(() => history.push(authURL))
  .catch((err: Error) => {
    alert(err.message);
  });

export const handleLocationChange = (history: History, url: string) => {
  history.push(url);
};
