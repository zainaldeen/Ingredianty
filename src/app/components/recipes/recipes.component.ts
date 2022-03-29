import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../../shared/models/RecipeModel/recipe.model";

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
    imagePath: ''
  };
  constructor() { }

  ngOnInit(): void {
  }
  handleSelectingRecipe(recipe: RecipeModel) {
    this.selectedRecipe = recipe;
  }
}
