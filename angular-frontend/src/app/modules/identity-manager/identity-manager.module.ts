import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [LoginComponent,RegisterComponent,ProfileComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ]
})
export class IdentityManagerModule {
  static forRoot() {
    return {
      ngModule: IdentityManagerModule,
      providers: [
        AuthGuard,
        AuthService
      ]
    }
  }
}
