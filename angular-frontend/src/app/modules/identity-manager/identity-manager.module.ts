import {NgModule} from '@angular/core';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./services/auth.service";
import {SharedModule} from "../../shared/shared.module";
import {AuthGuard} from "./guards/auth.guard";
import {ApprovalGuard} from "./guards/approval.guard";
import {RoleGuard} from "./guards/role.guard";
import {IdentityManagerRoutingModule} from "./identity-manager-routing.module";

@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    SharedModule.forRoot(), IdentityManagerRoutingModule
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
