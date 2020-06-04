import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// We'll need this component from react-redux. This component is what we'll need to wrap around the entire render
// object because we want our entire application to have access to the redux store.
import { Provider } from "react-redux";
import store from "./redux/store.js";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
