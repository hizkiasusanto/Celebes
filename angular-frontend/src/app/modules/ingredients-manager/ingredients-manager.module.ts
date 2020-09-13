import { NgModule } from '@angular/core';

import { IngredientsManagerRoutingModule } from './ingredients-manager-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { IngredientsManagerDashboardComponent } from './ingredients-manager-dashboard/ingredients-manager-dashboard.component';
import { IngredientsLibraryComponent } from './tab-contents/ingredients-library/ingredients-library.component';
import { AddIngredientsFormComponent } from './tab-contents/add-ingredients-form/add-ingredients-form.component';


@NgModule({
  declarations: [IngredientsManagerDashboardComponent, IngredientsLibraryComponent, AddIngredientsFormComponent],
  imports: [
    SharedModule.forRoot(),
    IngredientsManagerRoutingModule
  ]
})
export class IngredientsManagerModule { }
