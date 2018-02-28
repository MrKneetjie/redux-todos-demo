import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";

import { TodosService } from "./store/todos/todos.service";
import { TodosActioncreator } from "./store/todos/todos.actioncreator";
import { TodoService } from "./store/todo/todo.service";
import { TodoActioncreator } from "./store/todo/todo.actioncreator";

import { Components } from "./components";
import { Pages } from "./pages";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [
    TodosActioncreator,
    TodosService,
    TodoActioncreator,
    TodoService,
  ],
  declarations: [
    ...Components,
    ...Pages,
  ],
})
export class TodoModule {}
