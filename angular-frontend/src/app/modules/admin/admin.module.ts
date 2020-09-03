import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [AdminDashboardComponent],
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
