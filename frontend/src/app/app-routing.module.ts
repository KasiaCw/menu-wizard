import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeFormComponent} from "./recipe-form/recipe-form.component";

const routes: Routes = [
//  { path: 'recipies', component: RecipiesListComponent },
  { path: 'addrecipe', component: RecipeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
