import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredient[] = [new Ingredient('Tomatoes',5),new Ingredient('Cucumber',2)];
  constructor() { }

  ngOnInit() {
  }

  onItemsEntered(ingredient:Ingredient) {
    
    this.ingredients.push(ingredient);
  }
}
