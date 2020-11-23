import { put, takeEvery } from "redux-saga/effects";

function* testSaga() {
  yield put({ type: "TEST" });
}

function* mySaga() {
  yield takeEvery("TEST_REQ", testSaga);
}

export default mySaga;
