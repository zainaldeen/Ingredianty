import {Ingredient} from "../../models/IngredientModel/ingredient.model";
import {Subject} from "rxjs";
import {RecipeModel} from "../../models/RecipeModel/recipe.model";


export class ShoppingListService {

  shoppingItemAdded = new Subject<Ingredient[]>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }




  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingItemAdded.next(this.ingredients.slice());
  }


  addItems(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingItemAdded.next(this.ingredients.slice());

  }
}

