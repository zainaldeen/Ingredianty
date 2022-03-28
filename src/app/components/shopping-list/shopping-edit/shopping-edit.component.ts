import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingItemAdded = new EventEmitter<Ingredient>();
  name:string ='';
  amount:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    this.shoppingItemAdded.emit({
      name: this.name,
      amount: this.amount
    });
  }
  clearItem(){
    this.name = '';
    this.amount = 0;

  }
}
