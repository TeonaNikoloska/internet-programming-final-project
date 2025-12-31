import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../../app/core/services/recipe';
import { Recipe } from '../../../app/core/models/recipe';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-details.html',
  styleUrls: ['./recipe-details.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe!: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getById(id).subscribe((data: any) => {
      this.recipe = data;
    });
  }
}
