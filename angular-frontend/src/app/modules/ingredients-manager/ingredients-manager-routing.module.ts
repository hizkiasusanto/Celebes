import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IngredientsManagerDashboardComponent} from "./ingredients-manager-dashboard/ingredients-manager-dashboard.component";
import {PageNotFoundComponent} from "../../shared/components/page-not-found/page-not-found.component";
import {IngredientsLibraryComponent} from "./tab-contents/ingredients-library/ingredients-library.component";

const routes: Routes = [
  {path:'',component:IngredientsManagerDashboardComponent,children:[
      {path:'library',component: IngredientsLibraryComponent},
      {path:'',pathMatch:'full',redirectTo:'library'},
      {path:'**', component: PageNotFoundComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsManagerRoutingModule { }
