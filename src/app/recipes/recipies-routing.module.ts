import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/authguard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const appRoutes:Routes = [
    {path:'recipes',component:RecipesComponent,children :[
      {path:'',component:RecipeStartComponent},
      {path:'new',component:RecipeEditComponent,canActivate:[AuthGuardService]},
      {path:':id',component:RecipeDetailComponent},
      {path:':id/edit',component:RecipeEditComponent,canActivate:[AuthGuardService]},
    ]},
  //  {path:'not-found',component:PageNotFoundComponent},
//    {path:'not-found',component:ErrorPageComponent,data:{message:'Page Not Found..!!'}},
//    {path:'**',redirectTo:'/not-found',pathMatch: 'full'}
  ]



@NgModule({
    imports : [
        RouterModule.forChild(appRoutes)
    ],
    exports :[RouterModule]
})
export class RecipiesRoutingModule {

}