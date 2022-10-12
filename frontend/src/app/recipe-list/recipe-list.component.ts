import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[]

  constructor(private recipeService:RecipeServiceService) { }

  ngOnInit() {
    this.recipeService.findAll().subscribe(data =>{
      this.recipe=data;
    })
  }

}
