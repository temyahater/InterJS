import { takeEvery, call, put } from "redux-saga/effects";
import { UserSaga } from "../../models/interfaces";
import { getUser } from "../../services/Database/database-calls";
import { userAction } from "../actions/user";
import { type } from "../actions/user-request";

function* userRequest(action: UserSaga) {
  try {
    const data = yield call(getUser, action.auth);
    yield put(userAction(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* userSaga() {
  yield takeEvery(type, userRequest);
}
