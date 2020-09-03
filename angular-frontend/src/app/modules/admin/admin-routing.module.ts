import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {EmployeesComponent} from "./tab-contents/employees/employees.component";
import {DummyComponent} from "./tab-contents/dummy/dummy.component";

const routes: Routes = [
  {path:'', component: AdminDashboardComponent, children: [
      {path:'employees',component: EmployeesComponent},
      {path:'dummy', component: DummyComponent},
      {path:'',pathMatch:'full',redirectTo:'employees'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
