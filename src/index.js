import React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import "./index.css";

import App from "./App";
import rootReducer from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";



// needed dependancies
//XX applyMiddleware from redux
//XX thunk from redux-thunk
//XX logger from redux-logger
// XX rootReducer from ./reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
