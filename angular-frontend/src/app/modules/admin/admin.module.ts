import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeesComponent } from './tab-contents/employees/employees.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { DummyComponent } from './tab-contents/dummy/dummy.component';
import {EmployeeDetailComponent} from "./tab-contents/employee-detail/employee-detail.component";



@NgModule({
  declarations: [AdminDashboardComponent, EmployeesComponent, DummyComponent, EmployeeDetailComponent],
  imports: [SharedModule.forRoot(),AdminRoutingModule],
  exports: []
})
export class AdminModule {
  static forRoot() {
    return {
      ngModule: AdminModule
    }
  }
}
