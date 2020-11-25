/* eslint-disable no-console */
import { takeEvery, call } from "redux-saga/effects";
import { TaskAddSaga } from "../../models/interfaces";
import { handleTasksAddClick } from "../../services/Database/database-calls";
import { type } from "../actions/task-add-request";

function* taskAddRequest(action: TaskAddSaga) {
  try {
    yield call(handleTasksAddClick, action.database, action.user, action.task);
  } catch (e) {
    console.log(e);
  }
}

export default function* taskAddSaga() {
  yield takeEvery(type, taskAddRequest);
}
