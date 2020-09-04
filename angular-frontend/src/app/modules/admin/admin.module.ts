import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ListOfEmployeesComponent } from './tab-contents/list-of-employees/list-of-employees.component';
import {AdminRoutingModule} from "./admin-routing.module";
import { DummyComponent } from './tab-contents/dummy/dummy.component';
import {EmployeeDetailComponent} from "./tab-contents/employee-detail/employee-detail.component";



@NgModule({
  declarations: [AdminDashboardComponent, ListOfEmployeesComponent, DummyComponent, EmployeeDetailComponent],
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
