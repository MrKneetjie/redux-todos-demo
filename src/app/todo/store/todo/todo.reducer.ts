import { Reducer } from "redux";

import { Todo, TodoAction } from "./todo.types";
import { TODO_LOAD, TODO_DONE, TODO_CLEAR } from "./todo.actiontypes";

export const todoReducer: Reducer<Todo> = (
  state: Todo = null,
  action: TodoAction
): Todo => {
  if (action.type === TODO_LOAD) {
    // update todo in state
  }

  if (action.type === TODO_CLEAR) {
    // clear todo in state
  }

  if (action.type === TODO_DONE && state && action.todo.id === state.id) {
    // update todo in state
  }

  return state;
};
