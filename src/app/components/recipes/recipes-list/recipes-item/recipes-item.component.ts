import {Component, OnInit, Input} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/RecipeModel/recipe.model";
import {RecipeService} from "../../../../shared/services/recipes/recipe.service";
import {Router, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {

  }
}
