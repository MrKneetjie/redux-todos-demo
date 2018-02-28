import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

import { Todos, TodoState, TodosActioncreator, Todo, TodoActioncreator } from "../../store";

@Component({
  selector: "todos-page",
  templateUrl: "./todos.page.html",
})
export class TodosPageComponent implements OnInit, OnDestroy {
  public todos: Todos = [];
  public loading: boolean = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private ngRedux: NgRedux<TodoState>,
    private todosActions: TodosActioncreator,
    private todoActions: TodoActioncreator
  ) {}

  public ngOnInit(): void {
    this.ngRedux
      .select("todos")
      .takeUntil(this.destroy$)
      .subscribe((todos: Todos) => this.todos = todos);

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
