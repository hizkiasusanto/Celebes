import {NgModule} from '@angular/core';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthService} from "./auth.service";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "./auth.guard";
import {ApprovalGuard} from "./approval.guard";
import {RoleGuard} from "./role.guard";

@NgModule({
  declarations: [LoginComponent,RegisterComponent,ProfileComponent],
  imports: [
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
        ApprovalGuard,
        RoleGuard,
        AuthService
      ]
    }
  }
}
