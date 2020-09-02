import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import { InventoryManagerDashboardComponent } from './inventory-manager-dashboard/inventory-manager-dashboard.component';


@NgModule({
  declarations: [InventoryManagerDashboardComponent],
  imports: [
    CommonModule,
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
