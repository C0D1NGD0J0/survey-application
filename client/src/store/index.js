import React from "react";
import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";

const store = createStore(rootReducer, {}, applyMiddleware());

export default store;