import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeesComponent } from './tab-contents/employees/employees.component';



@NgModule({
  declarations: [AdminDashboardComponent, EmployeesComponent],
  imports: [SharedModule.forRoot()],
  exports: []
})
export class AdminModule {
  static forRoot() {
    return {
      ngModule: AdminModule
    }
  }
}
