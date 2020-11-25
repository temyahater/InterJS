/* eslint-disable no-console */
import { takeEvery, call, put } from "redux-saga/effects";
import { UserEnterSaga } from "../../models/interfaces";
import { handleUserEnter } from "../../services/Database/database-calls";
import { userAction } from "../actions/user";
import { type } from "../actions/user-enter-request";

function* userEnterRequest(action: UserEnterSaga) {
  try {
    const data = yield call(handleUserEnter, action.auth, action.user);
    yield data ? put(userAction(data.user.uid)) : console.log("Error enter, check error info.");
  } catch (e) {
    console.log(e);
  }
}

export default function* userEnterSaga() {
  yield takeEvery(type, userEnterRequest);
}
