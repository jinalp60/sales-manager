import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AdminRoutingModule } from './admin/admin-routing.module';

import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './auth.guard';
import { CheckAuthComponent } from './check-auth/check-auth.component';
import { JwtModule } from '@auth0/angular-jwt';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    CheckAuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    HomeModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule,
    NgxPaginationModule,
    
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: ['localhost:8000/api/auth']
      }
    })

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
