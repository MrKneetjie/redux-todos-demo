import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

import { Todo, TodoState, TodoActioncreator } from "../../store";

@Component({
  selector: "todo-page",
  templateUrl: "./todo.page.html",
})
export class TodoPageComponent implements OnInit, OnDestroy {
  public todo: Todo = null;
  public loading: boolean = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private ngRedux: NgRedux<TodoState>,
    private todoActions: TodoActioncreator
  ) {}

  public ngOnInit(): void {
    this.ngRedux
      .select("todo")
      .takeUntil(this.destroy$)
      .subscribe((todo: Todo) => this.todo = todo);

    this.todoActions.fetchTodo(this.route.snapshot.params.id).then(
      () => this.loading = false,
      () => this.loading = false
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.todoActions.clearTodo();
  }

  public do(): void {
    this.todoActions.do(this.todo);
  }
}
