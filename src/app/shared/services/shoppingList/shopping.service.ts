import {EventEmitter} from "@angular/core";
import {Ingredient} from "../../models/IngredientModel/ingredient.model";


export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }


  shoppingItemAdded = new EventEmitter<Ingredient[]>();


  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.shoppingItemAdded.emit(this.ingredients.slice());
  }


  addItems(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.shoppingItemAdded.emit(this.ingredients.slice());

  }
}
