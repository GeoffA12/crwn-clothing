import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// We'll need this component from react-redux. This component is what we'll need to wrap around the entire render
// object because we want our entire application to have access to the redux store.
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.js";

// Component that will tie together our local storage with redux and enable local storage across our app
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
