import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private recipeUrl:string

  constructor(private http: HttpClient) {
    this.recipeUrl = 'http://localhost:8080/api/recipies';
  }

  public findrecipe(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl);
  }

  public save(recipe: Recipe) {
    return this.http.post<Recipe>(this.recipeUrl, recipe);
  }

  public findAll():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.recipeUrl);
  }
}
