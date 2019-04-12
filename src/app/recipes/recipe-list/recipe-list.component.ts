import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private subscription: Subscription;
  constructor(private recipeService:RecipeService){

  }

  recipes : Recipe[];

  ngOnInit() {
    
    this.subscription =this.recipeService.recipeChanged.subscribe(
      (recipes:Recipe[]) =>{
        this.recipes = recipes;
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

}
