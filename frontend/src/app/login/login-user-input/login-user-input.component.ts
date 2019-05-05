import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-login-user-input',
  templateUrl: './login-user-input.component.html',
  styleUrls: ['./login-user-input.component.css']
})
export class LoginUserInputComponent implements OnInit {

  userName:string;
  userPassword:string;
  error:string=null;
 
  constructor(private loginService:LoginServiceService,private router: Router) { }

  ngOnInit() {
  }

  userLogin(){
    console.log("logging in user",this.userName);
    this.loginService.authenticateUserLogin(this.userName,this.userPassword).subscribe(
      result => this.router.navigate(['admin']),
      err => this.error = 'Could not authenticate');
  }
}
