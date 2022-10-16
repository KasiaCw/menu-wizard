import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeManagerComponent} from "./recipe-manager/recipe-manager.component";
import {RecipeCreatorComponent} from "./recipe-creator/recipe-creator.component";
import {AuthComponent} from "./auth/auth.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";

const routes: Routes = [
  {path: 'recipies', component: RecipeListComponent},
  {path: 'addrecipe', component: RecipeCreatorComponent},
  {path: 'recipe/:id', component: RecipeManagerComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
