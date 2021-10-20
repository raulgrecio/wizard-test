import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../core/store";

const loading = (rootState: RootState): boolean =>
  rootState.checkingAccount.service.loading;

const status = (rootState: RootState): number | null =>
  rootState.checkingAccount.service.status;

export const getLoadingSelector = createSelector(loading, (loading) => loading);

export const getSuccessSelector = createSelector(
  status,
  (status) => status === 200
);
