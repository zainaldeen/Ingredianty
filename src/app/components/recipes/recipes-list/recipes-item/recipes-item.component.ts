import {Component, OnInit, Input} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/RecipeModel/recipe.model";
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!: RecipeModel;

  constructor() { }

  ngOnInit(): void {

  }
}
