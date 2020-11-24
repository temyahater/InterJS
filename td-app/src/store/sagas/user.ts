import { takeEvery, call, put } from "redux-saga/effects";
import { getUser } from "../../services/Database/database-calls";
import userAction from "../actions/user";

const requestUser = "USER_REQUEST";

interface User {
  auth: object;
  type: string;
}

function* userRequest(action: User) {
  try {
    const data = yield call(getUser, action.auth);
    yield put(userAction(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* userSaga() {
  yield takeEvery(requestUser, userRequest);
}
