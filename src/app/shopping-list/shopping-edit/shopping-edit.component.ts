import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput:ElementRef;
  @ViewChild('nameInput') nameInput:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAdded(){
    this.shoppingListService.onItemsEntered(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }
}
