import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {LoginServiceService} from '../app/login/login-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router,private loginService:LoginServiceService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("can activate method");
      if (sessionStorage.getItem('access_token')) {
        console.log("token available");
        return true;
      }
      
      else if(this.loginService.getUser() != null){
        console.log("user logged in using fb or google account");
        return true;
      }
      console.log("third case");
      this.router.navigate(['login']);
      return false;
    
  }
}
