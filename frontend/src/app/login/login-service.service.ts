import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService, GoogleLoginProvider, FacebookLoginProvider} from 'angular4-social-login';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { config } from '../../assets/config/config';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  signInVarResult=false;
  user: any;
  constructor(private authService: AuthService,private router: Router,private http: HttpClient) { }
  getUser(){
    return this.user;
  }

  signInGoogleService(){
    
    console.log("google service called");
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
    this.authService.authState.subscribe((user) => {
      this.user=user;
      this.signInVarResult=(this.user != null);
      console.log("UserData:",this.user);
      
      if(this.signInVarResult){
        //console.log("navigated");
        //this.router.navigate(['/admin']);
        
        this.authenticateUserLogin('admin','admin').subscribe(
          result => this.router.navigate(['admin']),
          err => console.log("could not authenticate"));
      
      }
    });
    
  }
  
  signInFacebookService(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.user=user;
      this.signInVarResult=(this.user != null);
      console.log("UserData:",this.user);
      
      if(this.signInVarResult){
        this.router.navigate(['/admin']);
      }
      
    });
  }
  signOut(){
    if(this.user!=null){
      console.log("signing out");
      this.authService.signOut();
      this.user=null;
    }
    
    console.log("print",this.user);
    sessionStorage.removeItem('access_token');
    
    
  }
  authenticateUserLogin(username,password):Observable<boolean>{
    
    return this.http.post<{token: string}>('/api'+config.auth.authUrl,{username, password})
      .pipe(
        map(result => {
          console.log("service result:",result);
          sessionStorage.setItem('access_token', result.token);
          return true;
        })
      );
    
      
  }
}
