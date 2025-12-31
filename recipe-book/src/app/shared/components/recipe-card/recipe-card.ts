import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../../core/models/recipe';
import { RecipeService } from '../../../core/services/recipe';
import { inject } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-card.html',
  styleUrls: ['./recipe-card.css']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;
  private recipeService = inject(RecipeService);

  toggleFavorite(recipe: Recipe) {
    this.recipeService.update({ ...recipe, isFavorite: !recipe.isFavorite }).subscribe(updated => {
      recipe.isFavorite = updated.isFavorite;
    });
  }
}
