import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from "../../../shared/services/shoppingList/shopping.service";
import {Ingredient} from "../../../shared/models/IngredientModel/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }
  name: string = '';
  amount: number = 0;
  ngOnInit(): void {
  }

  addItem() {
    this.shoppingListService.addItem(new Ingredient(this.name, this.amount))
  }
  clearItem(){
    // this.name = '';
    // this.amount = 0;

  }
}
