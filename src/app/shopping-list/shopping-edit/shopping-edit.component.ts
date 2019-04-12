import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') submittedForm:NgForm;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private subscription: Subscription;
  selectedItemIndex:number;
  constructor(private shoppingListService:ShoppingListService) { }
  selectedIngredient:Ingredient;
name='';
amount :number;
  editMode = false;
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number) =>{
        this.selectedItemIndex = index;
        this.selectedIngredient = this.shoppingListService.getIngredientByIndex(index);
        this.submittedForm.setValue({
          name:this.selectedIngredient.name,
          amount:this.selectedIngredient.amount
        });
        this.editMode = true;
      }
    );
  }


  onAdded(form:NgForm){
    const inputForm  = form.value;
    if(!this.editMode)
    {
      this.shoppingListService.onItemsEntered(new Ingredient(inputForm.name,inputForm.amount));
    } else
    {
      this.shoppingListService.onIngredientsUpdated(this.selectedItemIndex,new Ingredient(inputForm.name,inputForm.amount));
    }
    this.editMode = false;
    this.submittedForm.resetForm();
  }

  onClear()
  {
    this.editMode = false;
    this.submittedForm.resetForm();
  }

  onDelete(){
    this.shoppingListService.removeIngredients(this.selectedItemIndex);
    this.editMode = false;
    this.submittedForm.resetForm();
  }
}
