import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers/reducer";
import testSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(testSaga);

export default store;
