import { Todos } from "./todos/todos.types";
import { Todo } from "./todo/todo.types";

export interface TodoState {
  todos: Todos;
  todo: Todo;
}
