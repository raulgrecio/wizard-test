import { createSelector } from "@reduxjs/toolkit";

import {
  getAcceptTerms,
  getMayorAge,
  getPassword,
  getConfirmPassword,
  getHintPassword,
} from "./checkingAccount.form.state";

export const getAcceptTermsSelector = createSelector(
  getAcceptTerms,
  (acceptTerms) => acceptTerms
);

export const getMayorAgeSelector = createSelector(
  getMayorAge,
  (mayorAge) => mayorAge
);

export const getPasswordSelector = createSelector(
  getPassword,
  (password) => password
);

export const getConfirmPasswordSelector = createSelector(
  getConfirmPassword,
  (confirmPassword) => confirmPassword
);

export const getHintPasswordSelector = createSelector(
  getHintPassword,
  (hintPassword) => hintPassword
);
