import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../../recipe";
@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe = new Recipe(-1, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
