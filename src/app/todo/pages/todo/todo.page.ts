import { Component, OnInit, OnDestroy } from "@angular/core";
import { select } from "@angular-redux/store";
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
    private todoActions: TodoActioncreator
  ) {}

  public ngOnInit(): void {
    // fetch todo, toggle loading
    this.loading = false;
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  public do(): void {
    alert("done");
  }
}
