import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TODO_ROUTES } from "./todo/todo.routes"

export const ROUTES: Routes = [
  ...TODO_ROUTES,
  { path: "**", redirectTo: "/my-todos", pathMatch: "full" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
