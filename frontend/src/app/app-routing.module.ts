import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";

const routes: Routes = [
 { path: 'recipies', component: RecipeListComponent },
  { path: 'addrecipe', component: RecipeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
