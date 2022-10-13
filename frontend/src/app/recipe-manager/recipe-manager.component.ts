import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ActivatedRoute} from "@angular/router";
import {RecipeServiceService} from "../recipe-service.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-recipe-manager',
  templateUrl: './recipe-manager.component.html',
  styleUrls: ['./recipe-manager.component.scss']
})
export class RecipeManagerComponent implements OnInit {

  recipe: Recipe
  edit: boolean = false

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServiceService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id') || 'unknown_id';
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  getCurrentRecipe():Recipe{
    return Object.assign({}, this.recipe);
  }

  goBack(): void {
    this.location.back();
  }

  enterEditMode(): void {
    this.edit = true;
  }

  recipeUpdated(recipe: Recipe|undefined): void {
    if(recipe!==undefined) {
      console.log("Recipe changed - updating")
      this.recipe = recipe;
    }
    this.edit = false;
  }
}
