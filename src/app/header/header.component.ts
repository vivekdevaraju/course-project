import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'

})





export class HeaderComponent {

@Output() selectedItem = new EventEmitter<string>();



onRecipeSelected(item:string){
        this.selectedItem.emit(item);
}

onShoppingListSelected(item:string){
    this.selectedItem.emit(item);
}

}