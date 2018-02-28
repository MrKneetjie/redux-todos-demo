import { Routes } from "@angular/router";

import { TodosPageComponent } from "./pages/todos/todos.page";
import { TodoPageComponent } from "./pages/todo/todo.page";

export const TODO_ROUTES: Routes = [{
	path: "my-todos",
	component: TodosPageComponent,
	pathMatch: "full",
}, {
	path: "my-todos/:id",
	component: TodoPageComponent,
}];
