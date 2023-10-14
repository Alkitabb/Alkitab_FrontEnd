import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { REDUCERS } from "./reducers/Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const MIDDLEWARE = [thunk]
export const STORE = createStore(REDUCERS, composeWithDevTools(applyMiddleware(...MIDDLEWARE)))