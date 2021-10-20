import { combineReducers } from "redux";

import {
  checkingAccountFormSliceReducer,
  checkingAccountSubmitSliceReducer,
} from "../../../features/checkingAccount";

const checkingAccountReducer = combineReducers({
  form: checkingAccountFormSliceReducer,
  service: checkingAccountSubmitSliceReducer,
});

export const rootReducer = combineReducers({
  checkingAccount: checkingAccountReducer,
});
