import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignIn(signUpForm:NgForm){
    const email  = signUpForm.value.email;
    const password = signUpForm.value.password;

    this.authService.signInUser(email,password);

  }

}
