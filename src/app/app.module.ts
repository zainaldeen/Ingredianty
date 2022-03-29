import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './components/recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './components/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './components/header/directives/dropDownDirective/drop-down.directive';
import {RouterModule, Routes} from "@angular/router";

const appRoutes : Routes = [
    { path: '', component: RecipesComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    HeaderComponent,
    ShoppingEditComponent,
    DropDownDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
