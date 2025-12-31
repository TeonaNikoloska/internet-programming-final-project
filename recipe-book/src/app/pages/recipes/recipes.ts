import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../core/services/recipe';
import { Recipe } from '../../core/models/recipe';
import { RecipeCardComponent } from '../../shared/components/recipe-card/recipe-card';
import { CategoryFilterComponent } from '../../shared/components/category-filter/category-filter';
import { SearchBarComponent } from '../../shared/components/search-bar/search-bar';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    CommonModule,
    RecipeCardComponent,
    CategoryFilterComponent,
    SearchBarComponent
  ],
  templateUrl: './recipes.html'
})
export class RecipesComponent {
  recipes$!: Observable<Recipe[]>;
  selectedCategory = 'All';

  constructor(private recipeService: RecipeService) {
    this.recipes$ = this.recipeService.getAll().pipe(
      startWith([]) 
    );
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }

  filteredRecipes(recipes: Recipe[]) {
    if (!recipes) return [];
    return this.selectedCategory === 'All'
      ? recipes
      : recipes.filter(r => r.category === this.selectedCategory);
  }
}
