import { Component, OnInit } from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel( 1,'A Test RecipeModel', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 1,'A Test RecipeModel', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 1,'A Test RecipeModel', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new RecipeModel( 1,'A Test RecipeModel', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
