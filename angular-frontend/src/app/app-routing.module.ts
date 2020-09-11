import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApprovalGuard} from "./modules/identity-manager/guards/approval.guard";
import {AuthGuard} from "./modules/identity-manager/guards/auth.guard";
import {RoleGuard} from "./modules/identity-manager/guards/role.guard";

import {HomeComponent} from "./shared/components/home/home.component";
import {ApprovalRequiredComponent} from "./shared/components/approval-required/approval-required.component";
import {UnauthorizedComponent} from "./shared/components/unauthorized/unauthorized.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

import {Role} from "./modules/identity-manager/types/role";


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', redirectTo:'/'},
  {
    path: 'identity',
    loadChildren: () => import(`./modules/identity-manager/identity-manager.module`).then(m => m.IdentityManagerModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import(`./modules/profile/profile.module`).then(m => m.ProfileModule)
  },
  {
    path: 'expensesManager',
    canActivate: [AuthGuard, ApprovalGuard],
    loadChildren: () => import(`./modules/expenses-manager/expenses-manager.module`).then(m => m.ExpensesManagerModule)
  },
  {
    path: 'ingredientsManager',
    canActivate: [AuthGuard, ApprovalGuard],
    loadChildren: () => import(`./modules/ingredients-manager/ingredients-manager.module`).then(m => m.IngredientsManagerModule)
  },
  {
    path: 'adminDashboard',
    canActivate: [AuthGuard, RoleGuard],
    data: {roles: [Role.Admin, Role.Manager]},
    loadChildren: () => import(`./modules/admin/admin.module`).then(m => m.AdminModule)
  },
  {path: 'approval_required', component: ApprovalRequiredComponent, canActivate: [AuthGuard]},
  {path: 'unauthorized', component: UnauthorizedComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
