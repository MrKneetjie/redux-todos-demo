import { Action } from "redux";

export interface Todo {
  id: string;
  task: string;
  dueDate: Date;
}

export interface TodoAction extends Action {
  todo: Todo;
}
