import { NgModule } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations :[
        ShoppingListComponent,
        ShoppingEditComponent,
        
    ],
    imports :[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule,
        SharedModule
    ]
})
export class ShoppingListModule{

}