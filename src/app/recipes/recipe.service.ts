import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService {
    constructor(private shoppingListService:ShoppingListService){

    }
     recipeSelected = new EventEmitter<Recipe>();

     recipes : Recipe[] = [new Recipe('Sandwich',
     'Healthy',
  'https://mk0tw0mdal2noq6fa.kinstacdn.com/wp-content/uploads/sites/4/2016/01/04-2-320x190.jpg',
  [
      new Ingredient('Bread',2),new Ingredient('Lettiuce',1)
  ])
  ,
  new Recipe('Veg Whopper',
  'Fatty',
  'http://bk-apac-prd.s3.amazonaws.com/sites/burgerkingindia.in/files/VegWhopper-Detail_0.png',
  [
    new Ingredient('Bun',2),new Ingredient('Patty',1)
  ])];


      getRecipes(){
          return this.recipes.slice();
      }

      onIngredientsAdded(ingredients:Ingredient[]){
          this.shoppingListService.onIngredientsAdded(ingredients);
      }
}