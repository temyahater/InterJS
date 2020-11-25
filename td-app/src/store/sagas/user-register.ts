/* eslint-disable no-console */
import { takeEvery, call, put } from "redux-saga/effects";
import { UserRegisterSaga } from "../../models/interfaces";
import { handleUserRegister } from "../../services/Database/database-calls";
import { userAction } from "../actions/user";
import { type } from "../actions/user-register-request";

function* userRegisterRequest(action: UserRegisterSaga) {
  try {
    const data = yield call(handleUserRegister, action.auth, action.user);
    yield data ? put(userAction(data.user.uid)) : console.log("Error register, check error info.");
  } catch (e) {
    console.log(e);
  }
}

export default function* userRegisterSaga() {
  yield takeEvery(type, userRegisterRequest);
}
