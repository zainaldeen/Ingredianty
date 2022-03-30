import {Component, Input, OnInit} from '@angular/core';
import {RecipeModel} from "../../../shared/models/RecipeModel/recipe.model";
import { RecipeService } from "../../../shared/services/recipes/recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
  recipe!: RecipeModel;
  constructor(private recipeService: RecipeService, private router:Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
        this.recipe =  this.recipeService.selectRecipe(+params['id']);
    });
  }

  addIngredientToList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
    this.router.navigate(['/shopping-list']);
  }
}
