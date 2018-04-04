import { Reducer } from "redux";

import { Todos, TodosAction, TodoListItem } from "./todos.types";
import { TODOS_LOAD } from "./todos.actiontypes";
import { TODO_DONE } from "../todo/todo.actiontypes";

export const todosReducer: Reducer<Todos> = (
  state: Todos = [],
  action: TodosAction
): Todos => {
  if (action.type === TODOS_LOAD) {
    // update todos in state
  }

  if (action.type === TODO_DONE) {
    // update done state of todo in state found by todo in action
  }

  return state;
};
