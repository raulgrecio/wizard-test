import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./root.saga";
import { rootReducer } from "./root.reducer";
const sagaMiddleware = createSagaMiddleware();

const isDevelopment = process.env.NODE_ENV !== "production";
const middleware = isDevelopment ? [sagaMiddleware, logger] : [sagaMiddleware];

export const rootStore = configureStore({
  reducer: rootReducer,
  devTools: isDevelopment,
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
