import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients :Ingredient[] = [new Ingredient('Tomatoes',5),new Ingredient('Cucumber',2)];

    onItemsEntered(ingredient:Ingredient) {
    
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients);      
    }

      getIngredients(){
          return this.ingredients.slice();
      }

      onIngredientsAdded(ingredientAdded:Ingredient[]){

        this.ingredients.push(...ingredientAdded);
        this.ingredientsChanged.emit(this.ingredients);
      }
}