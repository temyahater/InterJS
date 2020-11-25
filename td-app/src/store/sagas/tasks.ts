import { takeEvery, call, put } from "redux-saga/effects";
import { TaskSaga } from "../../models/interfaces";
import { getTasks } from "../../services/Database/database-calls";
import { tasksAction } from "../actions/tasks";
import { type } from "../actions/tasks-request";

function* tasksRequest(action: TaskSaga) {
  try {
    const data = yield call(getTasks, action.database, action.user);
    yield put(tasksAction(Object.entries(data.val() || {})));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* tasksSaga() {
  yield takeEvery(type, tasksRequest);
}
