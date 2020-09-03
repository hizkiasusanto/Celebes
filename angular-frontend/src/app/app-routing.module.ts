import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./shared/components/home/home.component";

import {IdentityManagerModule} from "./modules/identity-manager/identity-manager.module";
import {RegisterComponent} from "./modules/identity-manager/register/register.component";
import {LoginComponent} from "./modules/identity-manager/login/login.component";
import {ProfileComponent} from "./modules/identity-manager/profile/profile.component";
import {AuthGuard} from "./modules/identity-manager/auth.guard";
import {ExpensesManagerModule} from "./modules/transaction-manager/expenses-manager.module";
import {ExpensesManagerDashboardComponent} from "./modules/transaction-manager/expenses-manager-dashboard/expenses-manager-dashboard.component";
import {InventoryManagerModule} from "./modules/inventory-manager/inventory-manager.module";
import {InventoryManagerDashboardComponent} from "./modules/inventory-manager/inventory-manager-dashboard/inventory-manager-dashboard.component";
import {ApprovalGuard} from "./modules/identity-manager/approval.guard";
import {ApprovalRequiredComponent} from "./shared/components/approval-required/approval-required.component";

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'expensesManager', component: ExpensesManagerDashboardComponent, canActivate: [AuthGuard, ApprovalGuard]},
  {path:'inventoryManager', component: InventoryManagerDashboardComponent, canActivate: [AuthGuard, ApprovalGuard]},
  {path:'approval_required', component: ApprovalRequiredComponent, canActivate: [AuthGuard]},
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    IdentityManagerModule.forRoot(),
    ExpensesManagerModule.forRoot(),
    InventoryManagerModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
