import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

import { Todos } from "./todos.types";

@Injectable()
export class TodosService {
  private baseURL: string = "/todos"

  constructor(
    private httpClient: HttpClient
  ) {}

  public fetchTodos(): Promise<Todos> {
    return this.httpClient
      .get<Todos>(this.baseURL)
      .toPromise();
  }
}
