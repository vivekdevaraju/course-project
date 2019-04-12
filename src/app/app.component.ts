import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBT9gsoRAY2vwUZSlNjuoge_mV57FGV2JU",
    authDomain: "recipe-book-angular7.firebaseapp.com"
    });
  }
 
}
