import { Component, OnInit } from '@angular/core';

import {AuthService, GoogleLoginProvider, FacebookLoginProvider} from 'angular4-social-login';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signInToggle:Boolean=true;
  signInVarResult: boolean=false;
  
  constructor(private loginService:LoginServiceService) { }

  ngOnInit() {
  }
  signInUpToggle(){
    console.log("signINUPtoggle is called");
    if(this.signInToggle==true){
      this.signInToggle=false;
    }
    else{
      this.signInToggle=true;
    }
  }
  signInGoogle(){
    console.log("Inside sign in google");
    this.loginService.signInGoogleService();
  }
  signInWithFB(): void {
    this.loginService.signInFacebookService();
  }
 
  
}
