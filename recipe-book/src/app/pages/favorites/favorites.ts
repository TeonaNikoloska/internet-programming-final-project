import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../core/services/recipe';
import { Recipe } from '../../core/models/recipe';
import { RecipeCardComponent } from '../../shared/components/recipe-card/recipe-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {
  favorites: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  private loadFavorites() {
    this.recipeService.getAll().subscribe(recipes => {
      this.favorites = recipes.filter(r => r.isFavorite);
    });
  }
}
