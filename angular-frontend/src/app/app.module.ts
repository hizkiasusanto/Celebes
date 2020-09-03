import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";

import {IdentityManagerModule} from "./modules/identity-manager/identity-manager.module";
import {ExpensesManagerModule} from "./modules/transaction-manager/expenses-manager.module";
import {InventoryManagerModule} from "./modules/inventory-manager/inventory-manager.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AppRoutingModule,
        SharedModule.forRoot(),
        IdentityManagerModule.forRoot(),
        ExpensesManagerModule.forRoot(),
        InventoryManagerModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
