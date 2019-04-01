import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amountInput:ElementRef;
  @ViewChild('nameInput') nameInput:ElementRef;
  @Output() selectedValues = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAdded(){
    this.selectedValues.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  }
}
