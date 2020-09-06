import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApprovalGuard} from "./modules/identity-manager/guards/approval.guard";
import {AuthGuard} from "./modules/identity-manager/guards/auth.guard";
import {RoleGuard} from "./modules/identity-manager/guards/role.guard";

import {HomeComponent} from "./shared/components/home/home.component";
import {ApprovalRequiredComponent} from "./shared/components/approval-required/approval-required.component";
import {UnauthorizedComponent} from "./shared/components/unauthorized/unauthorized.component";

import {ExpensesManagerDashboardComponent} from "./modules/transaction-manager/expenses-manager-dashboard/expenses-manager-dashboard.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'identity',
    loadChildren: () => import(`./modules/identity-manager/identity-manager.module`).then(m => m.IdentityManagerModule)
  },
  {path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import(`./modules/profile/profile.module`).then(m => m.ProfileModule)
  },
  {path: 'expensesManager', component: ExpensesManagerDashboardComponent, canActivate: [AuthGuard, ApprovalGuard]},
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
