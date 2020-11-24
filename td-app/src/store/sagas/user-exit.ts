/* eslint-disable no-console */
import { History } from "history";
import { takeEvery, call, put } from "redux-saga/effects";
import { handleUserOut } from "../../services/Database/database-calls";
import tasksAction from "../actions/tasks";
import userAction from "../actions/user";

const requestUser = "USER_EXIT_REQUEST";

interface UserSaga {
  history: History;
  auth: object;
  type: string;
}

function* userExitRequest(action: UserSaga) {
  try {
    yield call(handleUserOut, action.auth, action.history);
    yield put(userAction(""));
    yield put(tasksAction([]));
  } catch (e) {
    console.log(e);
  }
}

export default function* userExitSaga() {
  yield takeEvery(requestUser, userExitRequest);
}
