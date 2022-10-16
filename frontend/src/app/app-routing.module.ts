import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeManagerComponent} from "./recipe-manager/recipe-manager.component";
import {RecipeCreatorComponent} from "./recipe-creator/recipe-creator.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
  {path: 'recipies', component: RecipeListComponent},
  {path: 'addrecipe', component: RecipeCreatorComponent},
  {path: 'recipe/:id', component: RecipeManagerComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'users', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
