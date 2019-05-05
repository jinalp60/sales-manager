import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent } from './login-page/login-page.component';
import { LoginUserInputComponent } from './login-user-input/login-user-input.component';
import { AdminPageComponent } from '../admin/admin-page/admin-page.component';
import {AuthGuard } from '../auth.guard';
const loginroutes: Routes = [
  {
    path:'signIn',
    component:LoginPageComponent,
    data: {animation: 'SignInPage'}
  },
  {
    path:'login',
    component:LoginUserInputComponent,
    data: {animation: 'LoginPage'}
  },
  {
    path:'admin',
    component:AdminPageComponent,
    canActivate: [AuthGuard],
    data: {animation: 'AdminPage'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(loginroutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
