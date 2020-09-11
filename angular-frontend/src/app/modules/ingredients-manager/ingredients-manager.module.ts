import { NgModule } from '@angular/core';

import { IngredientsManagerRoutingModule } from './ingredients-manager-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { IngredientsManagerDashboardComponent } from './ingredients-manager-dashboard/ingredients-manager-dashboard.component';
import { IngredientsLibraryComponent } from './tab-contents/ingredients-library/ingredients-library.component';


@NgModule({
  declarations: [IngredientsManagerDashboardComponent, IngredientsLibraryComponent],
  imports: [
    SharedModule.forRoot(),
    IngredientsManagerRoutingModule
  ]
})
export class IngredientsManagerModule { }
