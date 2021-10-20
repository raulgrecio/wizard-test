import { createSlice } from "@reduxjs/toolkit";

export interface CheckingAccountSubmitState {
  loading: boolean;
  status: number | null;
}

const initialState: CheckingAccountSubmitState = {
  loading: false,
  status: null,
};

const checkingAccountSubmitSlice = createSlice({
  name: "checkingAccountSubmit",
  initialState,
  reducers: {
    sendCheckingAccount: (state) => {
      state.loading = true;
    },
    sendCheckingAccountLoad: (state, action) => {
      state.loading = action.payload;
    },
    responseSuccessed: (state, action) => {
      state.status = action.payload;
      state.loading = false;
    },
    responseFailed: (state, action) => {
      state.status = action.payload;
      state.loading = false;
    },
  },
});

export const checkingAccountSubmitSliceReducer =
  checkingAccountSubmitSlice.reducer;

export const {
  sendCheckingAccount,
  sendCheckingAccountLoad,
  responseSuccessed,
  responseFailed,
} = checkingAccountSubmitSlice.actions;
