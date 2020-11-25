/* eslint-disable no-console */
import { takeEvery, call, put } from "redux-saga/effects";
import { UserExitSaga } from "../../models/interfaces";
import { handleUserOut } from "../../services/Database/database-calls";
import { tasksAction } from "../actions/tasks";
import { userAction } from "../actions/user";
import { type } from "../actions/user-exit-request";

function* userExitRequest(action: UserExitSaga) {
  try {
    yield call(handleUserOut, action.auth, action.history);
    yield put(userAction(""));
    yield put(tasksAction([]));
  } catch (e) {
    console.log(e);
  }
}

export default function* userExitSaga() {
  yield takeEvery(type, userExitRequest);
}
