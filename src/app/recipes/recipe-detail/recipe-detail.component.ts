import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe :Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onShoppingListSelected(){
    this.recipeService.onIngredientsAdded(this.selectedRecipe.ingredients);
  }
}
