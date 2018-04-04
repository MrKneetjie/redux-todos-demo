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
    // fetch todo with service, call loadTodo
    return Promise.resolve();
  }

  public loadTodo(todo: Todo): void {
    // dispatch load todo action
  }

  public clearTodo(): void {
    // dispatch clear todo action
  }

  public do(todo: Todo): Promise<void> {
    // set todo done with todoservice, update todo with loadDone
    return Promise.resolve();
  }

  public loadDone(todo): void {
    // dispatch todo done action
  }
}
