import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/RecipeModel/recipe.model";
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<RecipeModel>();
  @Input() recipe: RecipeModel = new RecipeModel(-1, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }
  selectRecipe() {
    this.recipeSelected.emit(this.recipe);
  }


}
