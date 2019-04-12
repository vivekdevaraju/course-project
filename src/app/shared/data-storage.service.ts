
import { Injectable } from '@angular/core';
import { Http ,Headers,Response} from '@angular/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http:Http,private authService:AuthService) {
    }

    storeRecipes(recipes:any[]){
        const headers = new Headers({'Content-Type':'application/json'});
        //return this.http.post('https://recipe-book-angular7.firebaseio.com/data.json',servers,{headers:headers});
        const token =this.authService.getToken();
        return this.http.put('https://recipe-book-angular7.firebaseio.com/recipes.json?auth='+token,recipes,{headers:headers});
      }

      getAllRecipes(){
        const token =this.authService.getToken();
        return this.http.get('https://recipe-book-angular7.firebaseio.com/recipes.json?auth='+token).pipe(map(
          (response:Response) => {
            const data = response.json();
            console.log(data);
            return data;
          }
        ));
      }

}