import { Reducer } from "redux";

import { Todo, TodoAction } from "./todo.types";
import { TODO_LOAD, TODO_DONE, TODO_CLEAR } from "./todo.actiontypes";

export const todoReducer: Reducer<Todo> = (
  state: Todo = null,
  action: TodoAction
): Todo => {
  if (action.type === TODO_LOAD) {
    return {...action.todo};
  }

  if (action.type === TODO_CLEAR) {
    return null;
  }

  if (action.type === TODO_DONE && state && action.todo.id === state.id) {
    return {...action.todo};
  }

  return state;
};
