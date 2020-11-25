/* eslint-disable no-console */
import { takeEvery, call } from "redux-saga/effects";
import { UserRedirectSaga } from "../../models/interfaces";
import { handleLocationChange } from "../../services/Database/database-calls";
import { type } from "../actions/user-redirect-request";

function* userRedirectRequest(action: UserRedirectSaga) {
  try {
    yield call(handleLocationChange, action.history, action.url);
  } catch (e) {
    console.log(e);
  }
}

export default function* userRedirectSaga() {
  yield takeEvery(type, userRedirectRequest);
}
