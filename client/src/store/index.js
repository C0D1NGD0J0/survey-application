import React from "react";
import rootReducer from "../reducers";
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export default store;