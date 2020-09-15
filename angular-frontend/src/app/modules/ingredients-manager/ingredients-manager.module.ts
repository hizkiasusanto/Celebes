import { NgModule } from '@angular/core';

import { IngredientsManagerRoutingModule } from './ingredients-manager-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { IngredientsManagerDashboardComponent } from './ingredients-manager-dashboard/ingredients-manager-dashboard.component';
import { IngredientsLibraryComponent } from './tab-contents/ingredients-library/ingredients-library.component';
import { AddIngredientsFormComponent } from './tab-contents/add-ingredients-form/add-ingredients-form.component';
import { AddCategoryFormComponent } from './tab-contents/add-category-form/add-category-form.component';
import { IngredientsTableComponent } from './tab-contents/ingredients-table/ingredients-table.component';


@NgModule({
  declarations: [IngredientsManagerDashboardComponent, IngredientsLibraryComponent, AddIngredientsFormComponent, AddCategoryFormComponent, IngredientsTableComponent],
  imports: [
    SharedModule.forRoot(),
    IngredientsManagerRoutingModule
  ]
})
export class IngredientsManagerModule { }
