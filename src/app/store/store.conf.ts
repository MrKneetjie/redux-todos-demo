import { combineReducers } from "redux";

import { todoReducers, TODO_INITIAL_STATE } from "../todo/store";

import { AppState } from "./store.types";

export const rootReducer = combineReducers<AppState>({
  ...todoReducers,
});

export const STORE_INITIAL_STATE: AppState = {
  ...TODO_INITIAL_STATE,
};
