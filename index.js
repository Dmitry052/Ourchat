/** @format */

import React from "react";
import { AppRegistry } from "react-native";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./src/components/App";
import { name as appName } from "./app.json";
import reducers from "./src/reducers";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Wraper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wraper);
