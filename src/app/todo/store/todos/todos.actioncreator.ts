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
    // fetch todos with todosService
    return Promise.resolve();
  }

  public loadTodos(todos: Todos): void {
    // dispatch load todos action
  }
}
