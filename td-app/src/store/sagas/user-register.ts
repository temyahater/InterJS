/* eslint-disable no-console */
import { takeEvery, call, put } from "redux-saga/effects";
import { User } from "../../models/interfaces";
import { handleUserRegister } from "../../services/Database/database-calls";
import userAction from "../actions/user";

const requestUser = "USER_REGISTER_REQUEST";

interface UserSaga {
  user: User;
  auth: object;
  type: string;
}

function* userRegisterRequest(action: UserSaga) {
  try {
    const data = yield call(handleUserRegister, action.auth, action.user);
    yield data ? put(userAction(data.user.uid)) : console.log("Error register, chek error info.");
  } catch (e) {
    console.log(e);
  }
}

export default function* userRegisterSaga() {
  yield takeEvery(requestUser, userRegisterRequest);
}
