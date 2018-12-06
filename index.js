/** @format */

import React from "react";
import { AppRegistry } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./src/components/App";
import { name as appName } from "./app.json";
import reducers from "./src/reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const Wraper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wraper);
