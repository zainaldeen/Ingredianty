import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../shared/models/RecipeModel/recipe.model";
import { RecipeService } from "../../../shared/services/recipes/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

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
  constructor(private recipeService: RecipeService, private router:Router) { }

  ngOnInit(): void {
  }

  addIngredientToList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
    this.router.navigate(['/shopping-list']);
  }
}
