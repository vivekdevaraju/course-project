import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sentRecipe = new EventEmitter<Recipe>();

  recipes : Recipe[] = [new Recipe('Sandwich','Healthy',
  'https://mk0tw0mdal2noq6fa.kinstacdn.com/wp-content/uploads/sites/4/2016/01/04-2-320x190.jpg'),
  new Recipe('Cheese Sandwich','Fatty',
  'https://mk0tw0mdal2noq6fa.kinstacdn.com/wp-content/uploads/sites/4/2016/01/04-2-320x190.jpg')];
  constructor(){

  }
  ngOnInit() {
  }
  onRecipeRecieved(recievedRecipe)
  {
    this.sentRecipe.emit(recievedRecipe);
  }
}
