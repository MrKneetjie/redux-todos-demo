import { Reducer } from "redux";

import { Todos, TodosAction, TodoListItem } from "./todos.types";
import { TODOS_LOAD } from "./todos.actiontypes";
import { TODO_DONE } from "../todo/todo.actiontypes";

export const todosReducer: Reducer<Todos> = (
  state: Todos = [],
  action: TodosAction
): Todos => {
  if (action.type === TODOS_LOAD) {
    return [...action.todos];
  }

  if (action.type === TODO_DONE) {
    return [...state.map((todo: TodoListItem) => {
      if (todo.id !== action.todo.id) {
        return todo;
      }

      return {
        ...todo,
        done: true,
      };
    })];
  }

  return state;
};
