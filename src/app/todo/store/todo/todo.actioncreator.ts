import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

import { TodoState } from "../store.types";

import { TODO_LOAD, TODO_DONE, TODO_CLEAR } from "./todo.actiontypes";
import { TodoService } from "./todo.service";
import { Todo } from "./todo.types";

@Injectable()
export class TodoActioncreator {
  constructor(
    private ngRedux: NgRedux<TodoState>,
    private todoService: TodoService
  ) {}

  public fetchTodo(id: string): Promise<void> {
    return this.todoService.fetchTodo(id)
      .then((todo: Todo) => this.loadTodo(todo));
  }

  public loadTodo(todo: Todo): void {
    this.ngRedux.dispatch({
      type: TODO_LOAD,
      todo,
    });
  }

  public clearTodo(): void {
    this.ngRedux.dispatch({
      type: TODO_CLEAR,
    });
  }

  public do(todo: Todo): Promise<void> {
    return this.todoService.do(todo)
      .then((todo: Todo) => this.loadDone(todo));
  }

  public loadDone(todo): void {
    this.ngRedux.dispatch({
      type: TODO_DONE,
      todo,
    });
  }
}
