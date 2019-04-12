import { Recipe } from "./recipe.model";
import {Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
@Injectable()

export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();
    constructor(private shoppingListService:ShoppingListService,private dataStorageService:DataStorageService){

    }

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

        //return this. getAllRecipes();
          return this.recipes.slice();
          
      }

      onIngredientsAdded(ingredients:Ingredient[]){
          this.shoppingListService.onIngredientsAdded(ingredients);
      }
      getRecipeByName(index:number){
        this.recipeChanged.next(this.recipes);
        const recipes = this.recipes[index];          
          return recipes;
      }

      onAddNewRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      onUpdateRecipe(index:number,recipe:Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      removeRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

      saveRecipes()
      {
        this.dataStorageService.storeRecipes(this.recipes).subscribe(
          (response) =>{

          },
          (error) =>{

          }
        );
      }

      getAllRecipes(){
        this.dataStorageService.getAllRecipes().subscribe(
          (recipes) =>{
            console.log(recipes);
           this.recipes = recipes;
           this.recipeChanged.next(this.recipes.slice());
          },
          (error) =>{
            console.log(error);
          }
        );
       
      }
}