import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import React from "react";
import reducers from "./store/reducers";
import Thunk from "redux-thunk";

export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(Thunk));
  return <Provider store={store}>{children}</Provider>;
};
