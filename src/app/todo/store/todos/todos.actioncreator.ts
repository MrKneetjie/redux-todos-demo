import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

import { TodoState } from "../store.types";

import { TODOS_LOAD } from "./todos.actiontypes";
import { TodosService } from "./todos.service";
import { Todos } from "./todos.types";

@Injectable()
export class TodosActioncreator {
  constructor(
    private ngRedux: NgRedux<TodoState>,
    private todosService: TodosService
  ) {}

  public fetchTodos(): Promise<void> {
    if (this.ngRedux.getState().todos.length) {
      return Promise.resolve();
    }

    return this.todosService.fetchTodos()
      .then((todos: Todos) => this.loadTodos(todos));
  }

  public loadTodos(todos: Todos): void {
    this.ngRedux.dispatch({
      type: TODOS_LOAD,
      todos,
    });
  }
}
