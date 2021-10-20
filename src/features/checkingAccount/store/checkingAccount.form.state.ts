import { RootState } from "../../../core/store";

import { CheckingAccountState } from "./checkingAccount.interface";

export const initialState: CheckingAccountState = {
  acceptTerms: false,
  mayorAge: false,
  password: "",
  confirmPassword: "",
  hintPassword: "",
};

export const getAcceptTerms = (rootState: RootState): boolean =>
  rootState.checkingAccount.form.acceptTerms;

export const getMayorAge = (rootState: RootState): boolean =>
  rootState.checkingAccount.form.mayorAge;

export const getPassword = (rootState: RootState): string =>
  rootState.checkingAccount.form.password;

export const getConfirmPassword = (rootState: RootState): string =>
  rootState.checkingAccount.form.confirmPassword;

export const getHintPassword = (rootState: RootState): string =>
  rootState.checkingAccount.form.hintPassword;
