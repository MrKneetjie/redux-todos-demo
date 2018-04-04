import { Component, OnInit, OnDestroy } from "@angular/core";
import { select } from "@angular-redux/store";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

import { Todo, Todos } from "../../store";

@Component({
  selector: "todos-page",
  templateUrl: "./todos.page.html",
})
export class TodosPageComponent implements OnInit, OnDestroy {
  public todos: Todos = [];
  public loading: boolean = true;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
  ) {}

  public ngOnInit(): void {
    // fetch todos, toggle loading
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public do(todo: Todo): void {
    alert("done");
  }
}
