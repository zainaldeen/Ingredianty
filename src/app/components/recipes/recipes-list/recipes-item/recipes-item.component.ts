import {Component, OnInit, Input} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/RecipeModel/recipe.model";
import {RecipeService} from "../../../../shared/services/recipes/recipe.service";
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }


  selectRecipe() {
    this.recipeService.selectRecipe(this.recipe);
  }
}
