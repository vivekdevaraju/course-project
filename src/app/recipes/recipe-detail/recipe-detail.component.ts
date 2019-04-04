import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe :Recipe;
  id:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(   (params:Params) =>{
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipeByName(+params['id']);
     
    });
  }

  onShoppingListSelected(){
    this.recipeService.onIngredientsAdded(this.selectedRecipe.ingredients);
  }
}
