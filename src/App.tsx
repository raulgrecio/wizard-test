import React from "react";
import { Provider } from "react-redux";
import { rootStore } from "./core/store/root/root.store";
import { MainLayout } from "./features/layout";

function App() {
  return (
    <Provider store={rootStore}>
      <MainLayout />
    </Provider>
  );
}

export default App;
