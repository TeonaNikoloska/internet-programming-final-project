import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { RecipesComponent } from './pages/recipes/recipes';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe';
import { FavoritesComponent } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'favorites', component: FavoritesComponent }
];
