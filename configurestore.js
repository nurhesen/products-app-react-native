import { createStore, applyMiddleware } from "redux";
import app from "./reducers";

import createSagaMiddleware from "redux-saga";
import { watchAll } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchAll);

  return store;
}
