import { fork } from "redux-saga/effects";
import tasksSaga from "./tasks";
import userSaga from "./user";

export default function* rootSaga() {
  yield fork(tasksSaga);
  yield fork(userSaga);
}
