import { todosReducer } from "./todos/todos.reducer";
import { todoReducer } from "./todo/todo.reducer";

export const todoReducers = {
  todos: todosReducer,
  todo: todoReducer,
};

export const TODO_INITIAL_STATE = {
  todos: [],
  todo: null,
};

export { TodosActioncreator } from "./todos/todos.actioncreator";
export { Todos } from "./todos/todos.types";
export { TodoActioncreator } from "./todo/todo.actioncreator";
export { Todo } from "./todo/todo.types";
export { TodoState } from "./store.types";
