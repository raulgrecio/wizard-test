import { call, put, takeLatest, all, select } from "redux-saga/effects";

import { submitForm } from "../../../core/services/api";
import {
  sendCheckingAccount,
  responseSuccessed,
  responseFailed,
} from "./checkingAccount.submit.slice";
import {
  getPassword,
  getConfirmPassword,
  getHintPassword,
} from "./checkingAccount.form.state";

function* postCheckingSaga() {
  try {
    const pass: string = yield select(getPassword);
    const repass: string = yield select(getConfirmPassword);
    const optionalQuestion: string = yield select(getHintPassword);

    const response: { status: number } = yield call(
      submitForm,
      pass,
      repass,
      optionalQuestion
    );

    //NOTE: Redundant check by the current here
    if (response?.status === 200) {
      yield put(responseSuccessed(response.status));
    }
  } catch (error: any) {
    // NOTE: SEND ERROR TO REPORT SERVICE
    if (error?.status === 401) {
      yield put(responseFailed(error.status));
    } else {
      yield put(responseFailed(error?.status || 500));
      console.log(
        "Error: response api unexpected, status:",
        error?.status ?? error
      );
    }
  }
}

export function* watchChecking() {
  yield takeLatest(sendCheckingAccount.type, postCheckingSaga);
}
