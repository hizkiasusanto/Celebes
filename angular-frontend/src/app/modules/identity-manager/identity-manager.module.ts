import {NgModule} from '@angular/core';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./auth.service";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "./auth.guard";
import {ApprovalGuard} from "./approval.guard";
import {RoleGuard} from "./role.guard";

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    SharedModule.forRoot()
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
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
