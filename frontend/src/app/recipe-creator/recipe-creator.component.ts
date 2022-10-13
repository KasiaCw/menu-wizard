import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Recipe} from "../recipe";

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.scss']
})
export class RecipeCreatorComponent implements OnInit {


  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  public goToRecipeDetails(recipe: Recipe|undefined) {
    if(recipe!==undefined){
      this.router.navigate(['/recipe/' + recipe.id])
    } else {
      this.router.navigate(['/recipies'])

    }
  }
}
