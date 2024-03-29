import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./checkingAccount.form.state";

const checkingAccountFormSlice = createSlice({
  name: "checking",
  initialState,
  reducers: {
    changeAcceptTerms: (state, action) => {
      state.acceptTerms = action.payload;
    },
    changeMayorAge: (state, action) => {
      state.mayorAge = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    changeHintPassword: (state, action) => {
      state.hintPassword = action.payload;
    },
    resetForm: (state) => {
      state.acceptTerms = initialState.acceptTerms;
      state.confirmPassword = initialState.confirmPassword;
      state.hintPassword = initialState.hintPassword;
      state.mayorAge = initialState.mayorAge;
      state.password = initialState.password;
    },
  },
});

export const checkingAccountFormSliceReducer = checkingAccountFormSlice.reducer;

export const {
  changeAcceptTerms,
  changeMayorAge,
  changePassword,
  changeConfirmPassword,
  changeHintPassword,
  resetForm,
} = checkingAccountFormSlice.actions;
