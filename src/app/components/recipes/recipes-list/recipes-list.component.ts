import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    new RecipeModel( 1,'A Test RecipeModel 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 2,'A Test RecipeModel 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 3,'A Test RecipeModel 3', 'This is simply a test 3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 4,'A Test RecipeModel 4', 'This is simply a test 4', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeSelected.emit(recipe);
  }

}
