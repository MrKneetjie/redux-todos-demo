import { Component, OnInit, OnDestroy } from "@angular/core";
import { select } from "@angular-redux/store";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

import { Todos, TodosActioncreator, Todo, TodoActioncreator } from "../../store";

@Component({
  selector: "todos-page",
  templateUrl: "./todos.page.html",
})
export class TodosPageComponent implements OnInit, OnDestroy {
  @select("todos") public todos$: Observable<Todos>;
  public loading: boolean = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private todosActions: TodosActioncreator,
    private todoActions: TodoActioncreator
  ) {}

  public ngOnInit(): void {
    this.todosActions.fetchTodos().then(
      () => this.loading = false,
      () => this.loading = false
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public do(todo: Todo): void {
    this.todoActions.do(todo);
  }
}
