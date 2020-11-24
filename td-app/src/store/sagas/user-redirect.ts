/* eslint-disable no-console */
import { History } from "history";
import { takeEvery, call } from "redux-saga/effects";
import { handleLocationChange } from "../../services/Database/database-calls";

const requestUser = "USER_REDIRECT_REQUEST";

interface UserSaga {
  history: History;
  url: string;
  type: string;
}

function* userRedirectRequest(action: UserSaga) {
  try {
    yield call(handleLocationChange, action.history, action.url);
  } catch (e) {
    console.log(e);
  }
}

export default function* userRedirectSaga() {
  yield takeEvery(requestUser, userRedirectRequest);
}
