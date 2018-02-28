import { Action } from "redux";

export interface TodoListItem {
  id: string;
  task: string;
  dueDate: Date;
}

export type Todos = TodoListItem[];

export interface TodosAction extends Action {
  todo: TodoListItem;
  todos: Todos;
}
