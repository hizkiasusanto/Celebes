import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { InventoryManagerDashboardComponent } from './inventory-manager-dashboard/inventory-manager-dashboard.component';


@NgModule({
  declarations: [InventoryManagerDashboardComponent],
  imports: [
    SharedModule.forRoot()
  ],
  exports: []
})
export class InventoryManagerModule {
  static forRoot() {
    return {
      ngModule: InventoryManagerModule
    }
  }
}
