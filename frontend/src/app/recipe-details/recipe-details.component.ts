import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeServiceService} from "../recipe-service.service";
import {Recipe} from "../recipe";
import {Location} from "@angular/common";


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServiceService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void{
    const id = this.route.snapshot.paramMap.get('id') || 'unknown_id';
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }
  goBack(): void {
    this.location.back();
  }
}
