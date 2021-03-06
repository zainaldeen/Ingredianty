import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './components/recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './components/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './components/header/directives/dropDownDirective/drop-down.directive';
import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './components/recipes/edit-recipe/edit-recipe.component';


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
    RecipeStartComponent,
    EditRecipeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
