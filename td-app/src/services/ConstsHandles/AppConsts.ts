import { auth } from "../Firebase/Firebase";
import { History } from 'history';
import { User } from '../../models/interfaces'

export const tasksURL = "/tasks";
export const submitURL = "/submit";
export const authURL = "/";

export const handleLocationChange = (history: History, url: string) => {
  history.push(url);
};

export const handleUserRegister = (history: History, user: User) => {
  auth
    .createUserWithEmailAndPassword(user.email || '', user.password || '')
    .then(() => history.push(tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserEnter = (history: History, user: User) => {
  auth
    .signInWithEmailAndPassword(user.email || '', user.password || '')
    .then(() => history.push(tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserOut = (history: History) => {
  auth
    .signOut()
    .then(() => history.push(authURL))
    .catch((err) => {
      alert(err.message);
    });
};
