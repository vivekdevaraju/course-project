import { Ingredient } from '../shared/ingredients.model';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
    ingredients :Ingredient[] = [new Ingredient('Tomatoes',5),new Ingredient('Cucumber',2)];

    onItemsEntered(ingredient:Ingredient) {
    
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);      
    }

      getIngredients(){
          return this.ingredients.slice();
      }

      removeIngredients(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients);
      }
      getIngredientByIndex(index:number){
        return this.ingredients[index];
      }

      onIngredientsAdded(ingredientAdded:Ingredient[]){

        this.ingredients.push(...ingredientAdded);
        this.ingredientsChanged.next(this.ingredients);
      }

      onIngredientsUpdated(index:number,ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients);
      }
}