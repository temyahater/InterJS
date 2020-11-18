import { auth } from "./FireBaseConfig";

export const tasksURL = "/tasks";
export const submitURL = "/submit";
export const authURL = "/";

export const handleLocationChange = (history, url) => {
  history.push(url);
};

export const handleUserRegister = (history, user) => {
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => history.push(tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserEnter = (history, user) => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => history.push(tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserOut = (history) => {
  auth
    .signOut()
    .then(() => history.push(authURL))
    .catch((err) => {
      alert(err.message);
    });
};
