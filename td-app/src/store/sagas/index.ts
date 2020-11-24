import { fork } from "redux-saga/effects";
import tasksSaga from "./tasks";
import userSaga from "./user";
import userEnterSaga from "./user-enter";
import userExitSaga from "./user-exit";
import userRedirectSaga from "./user-redirect";
import userRegisterSaga from "./user-register";

export default function* rootSaga() {
  yield fork(userRedirectSaga);
  yield fork(userRegisterSaga);
  yield fork(userEnterSaga);
  yield fork(userSaga);
  yield fork(tasksSaga);
  yield fork(userExitSaga);
}
