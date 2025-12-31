import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html'
})
export class CategoryFilterComponent {
  categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

  @Output() categoryChange = new EventEmitter<string>();

  onChange(event: Event) {
    this.categoryChange.emit((event.target as HTMLSelectElement).value);
  }
}
