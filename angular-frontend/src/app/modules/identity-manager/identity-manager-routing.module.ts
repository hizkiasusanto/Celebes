import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {PageNotFoundComponent} from "../../shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityManagerRoutingModule { }
