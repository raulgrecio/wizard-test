import { all, fork } from "redux-saga/effects";

import { watchChecking } from "../../../features/checkingAccount";

function* rootSaga() {
  yield all([fork(watchChecking)]);
}

export default rootSaga;
