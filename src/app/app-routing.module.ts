import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';


const appRoutes:Routes = [
    {path:'header',component:HeaderComponent},
    {path:'recipes',component:RecipesComponent,children :[
      {path:'',component:RecipeStartComponent},
      {path:':id',component:RecipeDetailComponent}
    ]},
    {path:'shopping-list',component:ShoppingListComponent}
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