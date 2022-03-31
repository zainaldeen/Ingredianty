import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/models/IngredientModel/ingredient.model';
import {ShoppingListService} from "../../shared/services/shoppingList/shopping.service";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients!: Ingredient[];
  private addingItemsSubscription!: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.addingItemsSubscription = this.shoppingListService.shoppingItemAdded.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.addingItemsSubscription.unsubscribe();
  }

}
