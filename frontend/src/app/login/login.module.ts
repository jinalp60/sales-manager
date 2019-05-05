import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { AuthServiceConfig, SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider} from 'angular4-social-login';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginServiceService } from './login-service.service';
import { LoginUserInputComponent } from './login-user-input/login-user-input.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("101742750952-7fpsniind579uanbatp14lc547ttlhj4.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1797839943647244")
  }
]);

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config),
   
  ],
  declarations: [ LoginPageComponent, LoginUserInputComponent],
  providers:[LoginServiceService]
})
export class LoginModule { }
