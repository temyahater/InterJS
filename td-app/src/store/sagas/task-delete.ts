/* eslint-disable no-console */
import { takeEvery, call } from "redux-saga/effects";
import { TaskDeleteSaga } from "../../models/interfaces";
import { handleTaskDelete } from "../../services/Database/database-calls";
import { type } from "../actions/task-delete-request";

function* taskDeleteRequest(action: TaskDeleteSaga) {
  try {
    yield call(handleTaskDelete, action.database, action.user, action.id);
  } catch (e) {
    console.log(e);
  }
}

export default function* taskDeleteSaga() {
  yield takeEvery(type, taskDeleteRequest);
}
