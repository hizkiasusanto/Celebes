import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from "../../shared/components/page-not-found/page-not-found.component";
import {ListOfExpensesComponent} from "./tab-contents/list-of-expenses/list-of-expenses.component";
import {ExpensesManagerDashboardComponent} from "./expenses-manager-dashboard/expenses-manager-dashboard.component";
import {ExpensesChartsComponent} from "./tab-contents/charts/expenses-charts.component";
import {AddExpenseStepperComponent} from "./tab-contents/add-expense-stepper/add-expense-stepper.component";

const routes: Routes = [
  {path: 'add-new-expense', component: AddExpenseStepperComponent},
  {
    path: '', component: ExpensesManagerDashboardComponent, children: [
      {path: 'list-of-expenses', component: ListOfExpensesComponent},
      {path: 'charts', component: ExpensesChartsComponent},
      {path: '', pathMatch: 'full', redirectTo: 'list-of-expenses'},
      {path: '**', component: PageNotFoundComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesManagerRoutingModule {
}
