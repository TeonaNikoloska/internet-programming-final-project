export interface Recipe {
  id?: number;
  name: string;
  description: string;
  ingredients: string[];
  steps: string[];
  category: string;
  prepTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  imageUrl: string;
  isFavorite?: boolean;
}
