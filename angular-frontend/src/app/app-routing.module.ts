import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApprovalGuard} from "./modules/identity-manager/approval.guard";
import {AuthGuard} from "./modules/identity-manager/auth.guard";
import {RoleGuard} from "./modules/identity-manager/role.guard";

import {HomeComponent} from "./shared/components/home/home.component";
import {ApprovalRequiredComponent} from "./shared/components/approval-required/approval-required.component";
import {UnauthorizedComponent} from "./shared/components/unauthorized/unauthorized.component";

import {RegisterComponent} from "./modules/identity-manager/register/register.component";
import {LoginComponent} from "./modules/identity-manager/login/login.component";
import {ProfileComponent} from "./modules/identity-manager/profile/profile.component";

import {ExpensesManagerDashboardComponent} from "./modules/transaction-manager/expenses-manager-dashboard/expenses-manager-dashboard.component";

import {InventoryManagerDashboardComponent} from "./modules/inventory-manager/inventory-manager-dashboard/inventory-manager-dashboard.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'expensesManager', component: ExpensesManagerDashboardComponent, canActivate: [AuthGuard, ApprovalGuard]},
  {path: 'inventoryManager', component: InventoryManagerDashboardComponent, canActivate: [AuthGuard, ApprovalGuard]},
  {
    path: 'adminDashboard',
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: ['Admin', 'Manager']},
    loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule)
  },
  {path: 'approval_required', component: ApprovalRequiredComponent, canActivate: [AuthGuard]},
  {path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
