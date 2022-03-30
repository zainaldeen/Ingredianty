import {Component, OnInit} from '@angular/core';
import {RecipeModel} from "../../../shared/models/RecipeModel/recipe.model";
import {RecipeService} from "../../../shared/services/recipes/recipe.service";
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes! : RecipeModel[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

}
