import { NgModule } from '@angular/core';
import { ExpensesManagerDashboardComponent } from './expenses-manager-dashboard/expenses-manager-dashboard.component';
import {ExpensesManagerRoutingModule} from "./expenses-manager-routing.module";
import {SharedModule} from "../../shared/shared.module";
import { AddExpenseFormComponent } from './tab-contents/forms/add-expense-form/add-expense-form.component';
import { ListOfExpensesComponent } from './tab-contents/list-of-expenses/list-of-expenses.component';
import { DailyExpensesLineChartComponent } from './tab-contents/charts/daily-expenses-line-chart/daily-expenses-line-chart.component';
import { ExpensesByItemComponent } from './tab-contents/charts/expenses-by-item/expenses-by-item.component';
import { EditExpenseFormComponent } from './tab-contents/forms/edit-expense-form/edit-expense-form.component';
import { DatepickerComponent } from './tab-contents/partials/datepicker/datepicker.component';
import { DeleteExpenseFormComponent } from './tab-contents/forms/delete-expense-form/delete-expense-form.component';
import { ExpensesChartsComponent } from './tab-contents/charts/expenses-charts.component';
import { AddExpenseStepperComponent } from './tab-contents/add-expense-stepper/add-expense-stepper.component';
import { UploadInvoiceComponent } from './tab-contents/add-expense-stepper/upload-invoice/upload-invoice.component';
import { AddExpensesComponent } from './tab-contents/add-expense-stepper/add-expenses/add-expenses.component';
import { FormReviewComponent } from './tab-contents/add-expense-stepper/form-review/form-review.component';

@NgModule({
  declarations: [
    ExpensesManagerDashboardComponent,
    AddExpenseFormComponent,
    ListOfExpensesComponent,
    DailyExpensesLineChartComponent,
    ExpensesByItemComponent,
    EditExpenseFormComponent,
    DatepickerComponent,
    DeleteExpenseFormComponent,
    ExpensesChartsComponent,
    AddExpenseStepperComponent,
    UploadInvoiceComponent,
    AddExpensesComponent,
    FormReviewComponent,
  ],
  imports: [
    SharedModule.forRoot(),
    ExpensesManagerRoutingModule,
  ],
  exports: []
})
export class ExpensesManagerModule {
  static forRoot() {
    return {
      ngModule: ExpensesManagerModule
    }
  }
}
