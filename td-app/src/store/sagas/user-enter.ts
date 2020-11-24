/* eslint-disable no-console */
import { takeEvery, call, put } from "redux-saga/effects";
import { User } from "../../models/interfaces";
import { handleUserEnter } from "../../services/Database/database-calls";
import userAction from "../actions/user";

const requestUser = "USER_ENTER_REQUEST";

interface UserSaga {
  user: User;
  auth: object;
  type: string;
}

function* userEnterRequest(action: UserSaga) {
  try {
    const data = yield call(handleUserEnter, action.auth, action.user);
    yield data ? put(userAction(data.user.uid)) : console.log("Error enter, chek error info.");
  } catch (e) {
    console.log(e);
  }
}

export default function* userEnterSaga() {
  yield takeEvery(requestUser, userEnterRequest);
}
