import { takeEvery, call, put } from "redux-saga/effects";
import { getTasks } from "../../services/Database/database-calls";
import tasksAction from "../actions/tasks";

const requestTasks = "TASKS_REQUEST";

interface Task {
  database: object;
  user: string;
  type: string;
}

function* tasksRequest(action: Task) {
  try {
    const data = yield call(getTasks, action.database, action.user);
    yield put(tasksAction(Object.entries(data.val() || {})));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* tasksSaga() {
  yield takeEvery(requestTasks, tasksRequest);
}
