import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const appRoutes:Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
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