import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../../shared/models/RecipeModel/recipe.model";
import {RecipeService} from "../../shared/services/recipes/recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: RecipeModel = {
    id: -1,
    name: '',
    description: '',
    imagePath: '',
    ingredients: []
  };
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
