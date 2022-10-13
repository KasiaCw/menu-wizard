import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {

  @Input()
  recipe: Recipe = new Recipe();

  @Output()
  updatedRecipe = new EventEmitter<Recipe|undefined>();

  constructor(
    private recipeServiceService: RecipeServiceService) {
  }

  onSubmit() {
    console.log("on submit triggered" + this.recipe.title)
    this.recipeServiceService.save(this.recipe).subscribe(result => this.updatedRecipe.emit(result));
  }

  cancel(){
    console.log("cancelling")
    this.updatedRecipe.emit(undefined);
  }

}
