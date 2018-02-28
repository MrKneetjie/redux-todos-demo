import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

import { Todo } from "./todo.types";

@Injectable()
export class TodoService {
  private baseURL: string = "/todos"

  constructor(
    private httpClient: HttpClient
  ) {}

  public fetchTodo(id: string): Promise<Todo> {
    return this.httpClient
      .get<Todo>(`${this.baseURL}/${id}`)
      .toPromise();
  }

  public do(todo: Todo): Promise<Todo> {
    return this.httpClient
      .put<Todo>(`${this.baseURL}/${todo.id}`, {
        ...todo,
        done: true,
      })
      .toPromise();
  }
}
