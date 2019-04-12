import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/authguard.service';


const appRoutes:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipesComponent,children :[
      {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent,canActivate:[AuthGuardService]},
      {path:':id',component:RecipeDetailComponent},
      {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuardService]},
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent}
  //  {path:'not-found',component:PageNotFoundComponent},
//    {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not Found..!!'}},
//    {path:'**',redirectTo:'/not-found',pathMatch: 'full'}
  ]



@NgModule({
    imports : [
      //RouterModule.forRoot(appRoutes,{useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports :[RouterModule]
})
export class AppRoutingModule {

}