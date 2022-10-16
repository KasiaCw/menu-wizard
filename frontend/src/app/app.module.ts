import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipeFormComponent} from './recipe-form/recipe-form.component';
import {FormsModule} from "@angular/forms";
import {RecipeServiceService} from "./recipe-service.service";
import {HttpClientModule} from "@angular/common/http";
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailsComponent} from './recipe-details/recipe-details.component';
import {RecipeManagerComponent} from './recipe-manager/recipe-manager.component';
import {CommonModule} from "@angular/common";
import {RecipeCreatorComponent} from './recipe-creator/recipe-creator.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeFormComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeManagerComponent,
    RecipeCreatorComponent,
    AuthComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
