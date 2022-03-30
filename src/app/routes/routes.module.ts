import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import {RecipesDetailsComponent} from "../components/recipes/recipes-details/recipes-details.component";
import {RecipeStartComponent} from "../components/recipes/recipe-start/recipe-start.component";
import {EditRecipeComponent} from "../components/recipes/edit-recipe/edit-recipe.component";

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent
      },
      {
        path: 'new',
        component: EditRecipeComponent
      },
      { path: ':id', component: RecipesDetailsComponent },
      { path: ':id/edit', component: EditRecipeComponent }

    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', redirectTo: '/' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
