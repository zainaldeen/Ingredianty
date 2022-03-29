import {Ingredient} from "../IngredientModel/ingredient.model";

export class RecipeModel {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(
    id: number,
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}

