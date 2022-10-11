import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeServiceService} from "../recipe-service.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent {

  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeServiceService: RecipeServiceService) {
    this.recipe = new Recipe();
  }


  onSubmit(form: NgForm) {
    console.log("Submit clicked " + form);
    this.recipeServiceService.save(this.recipe).subscribe(result => this.gotToRecipiesList());
  }

  private gotToRecipiesList() {
    this.router.navigate(['/'])
  }
}
