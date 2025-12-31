import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../core/services/recipe';
import { Recipe } from '../../core/models/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-recipe.html',
  styleUrls: ['./add-recipe.css']
})
export class AddRecipeComponent {
  recipe: Recipe = {
    name: '',
    description: '',
    ingredients: [''],
    steps: [''],
    category: 'Breakfast',
    prepTime: 0,
    difficulty: 'Easy',
    imageUrl: '',
    isFavorite: false
  };

  constructor(private recipeService: RecipeService, private router: Router) {}

  addIngredient() {
    this.recipe.ingredients.push('');
  }

  addStep() {
    this.recipe.steps.push('');
  }

  submit() {
    if (!this.recipe.name || !this.recipe.description) {
      alert('Name and description are required!');
      return;
    }
    this.recipeService.add(this.recipe).subscribe(() => {
      alert('Recipe added successfully!');
      this.router.navigate(['/recipes']);
    });
  }
}
