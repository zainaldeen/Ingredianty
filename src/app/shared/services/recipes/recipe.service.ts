import {RecipeModel} from "../../models/RecipeModel/recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../../models/IngredientModel/ingredient.model";


export class RecipeService {
  recipe! : RecipeModel;
  recipes: RecipeModel[] = [
    new RecipeModel( 1,'A Test RecipeModel 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('Vegetables', 20)
    ]
    ),
    new RecipeModel( 2,'A Test RecipeModel 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Meat', 4),
      new Ingredient('Vegetables', 12),
      new Ingredient('frise', 100)
    ]
    ),
    new RecipeModel( 3,'A Test RecipeModel 3', 'This is simply a test 3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('frise', 100),
      new Ingredient('Vegetables', 20)
    ]
    ),
    new RecipeModel( 4,'A Test RecipeModel 4', 'This is simply a test 4', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    [
      new Ingredient('Vegetables', 102),
      new Ingredient('frise', 10)
    ]
    ),
  ];

  selectedRecipe = new EventEmitter<RecipeModel>();

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: RecipeModel) {
    this.recipe = recipe;
    this.selectedRecipe.emit(recipe);
  }
}
