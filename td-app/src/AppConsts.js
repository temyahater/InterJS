import { auth } from "./FireBaseConfig";

const tasksURL = "http://localhost:3000/tasks";
const baseURL = "http://localhost:3000";

export const handleUserRegister = (user) => {
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => (document.location.href = tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserEnter = (user) => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => (document.location.href = tasksURL))
    .catch((err) => {
      alert(err.message);
    });
};

export const handleUserOut = () => {
  auth
    .signOut()
    .then(() => (document.location.href = baseURL))
    .catch((err) => {
      alert(err.message);
    });
};
