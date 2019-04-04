import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
  @Input() index:number;
 

  ngOnInit() {
    // this.route.params.subscribe(   (params:Params) =>{
    //   this.recipe = this.recipeService.getRecipeByName(params['name']);
    // });
  }
}
