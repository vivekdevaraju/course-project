import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';
import { AuthGuardService } from 'src/app/auth/authguard.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode =false;
  recipeForm:FormGroup;
  
  constructor(private route:ActivatedRoute,private recipeService:RecipeService,private formBuilder: FormBuilder,private router:Router,private authguardService:AuthGuardService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !=null?true:false;
        console.log(this.editMode);
        console.log( this.id );
        this.initForm();
      }
    );
  }

  private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let ingredients = new FormArray([]);
    let ingredientName = '';
    let ingredientQuantity = '';

    if(this.editMode)
    {
      const recipe = this.recipeService.getRecipeByName(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients'])
      {
        for(let ingredient of recipe.ingredients)
        {
          ingredients.push( new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
          }));
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName,Validators.required),
      'description' : new FormControl(recipeDescription,Validators.required),
      'imagePath' : new FormControl(recipeImagePath,Validators.required),
      'ingredients': ingredients
    });
  }
  createItem(ingredients:Ingredient[]): FormControl[] {
    return null;
  }


  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  OnAddNewRecipe()
  {
    // let recipeName = this.recipeForm.value.name;
    // let recipeImagePath = this.recipeForm.value.imagePath;
    // let recipeDescription = this.recipeForm.value.description;
    // let ingredientsReceived :Ingredient[] = [];
    // if(this.recipeForm.value.ingredients)
    // {
    //   for(let ingredient of this.recipeForm.value.ingredients)
    //   {
    //     ingredientsReceived.push(ingredient);
    //   }
    // }
    // let receivedRecipe = new Recipe(recipeName,recipeDescription,recipeImagePath,ingredientsReceived);
    if(!this.editMode)
    {
      this.recipeService.onAddNewRecipe(this.recipeForm.value);
    }else{
      this.recipeService.onUpdateRecipe(this.id,this.recipeForm.value);
    }

    this.recipeForm.reset();
    this.router.navigateByUrl('/recipes');

  }

  onCancel(){
    this.router.navigateByUrl('/recipes');
  }

  onIngredientsAdd(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount' : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      }))
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
