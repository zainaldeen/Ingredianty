import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../shared/models/RecipeModel/recipe.model";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  @Input() recipe: RecipeModel = {
    id: -1,
    name: '',
    description: '',
    imagePath: '',
    ingredients: []
  };
  constructor() { }

  ngOnInit(): void {
  }

}
