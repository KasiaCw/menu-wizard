import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";

const routes: Routes = [
 { path: 'recipies', component: RecipeListComponent },
  { path: 'addrecipe', component: RecipeFormComponent },
  {path: 'recipe/:id', component: RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
