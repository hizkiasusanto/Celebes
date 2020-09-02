import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesManagerDashboardComponent } from './expenses-manager-dashboard/expenses-manager-dashboard.component';
import {SharedModule} from "../../shared/shared.module";
import { AddExpenseFormComponent } from './forms/add-expense-form/add-expense-form.component';
import { ListOfExpensesComponent } from './list-of-expenses/list-of-expenses.component';
import {GridTileContentComponent} from './partials/grid-tile-content/grid-tile-content.component';
import {AnchorDirective} from "./anchor.directive";
import { DailyExpensesLineChartComponent } from './charts/daily-expenses-line-chart/daily-expenses-line-chart.component';
import { ExpensesByItemComponent } from './charts/expenses-by-item/expenses-by-item.component';
import { EditExpenseFormComponent } from './forms/edit-expense-form/edit-expense-form.component';
import { DatepickerComponent } from './partials/datepicker/datepicker.component';
import { DeleteExpenseFormComponent } from './forms/delete-expense-form/delete-expense-form.component';

@NgModule({
  declarations: [
    ExpensesManagerDashboardComponent,
    AddExpenseFormComponent,
    ListOfExpensesComponent,
    GridTileContentComponent,
    AnchorDirective,
    DailyExpensesLineChartComponent,
    ExpensesByItemComponent,
    EditExpenseFormComponent,
    DatepickerComponent,
    DeleteExpenseFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot()
  ],
  exports: [
    ExpensesManagerDashboardComponent
  ]
})
export class ExpensesManagerModule {
  static forRoot() {
    return {
      ngModule: ExpensesManagerModule
    }
  }
}
