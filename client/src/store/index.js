import React from "react";
import { applyMiddleware, createStore } from "redux";

const store = createStore(() => [], {}, applyMiddleware());

export default store;