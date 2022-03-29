import {Component, OnInit} from '@angular/core';
import { UrlHandleService } from './shared/services/header/urlHandle.service';
import {RecipeService} from "./shared/services/recipes/recipe.service";
import {ShoppingListService} from "./shared/services/shoppingList/shopping.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UrlHandleService, RecipeService, ShoppingListService],

})
export class AppComponent implements OnInit {
  selectedUrl: string = 'recipe';

  constructor(private urlHandleService: UrlHandleService) {
  }
  ngOnInit() {
    this.urlHandleService.onNavigate.subscribe(
      (url) => {
        this.selectedUrl = url;
      }
    );
  }

}
