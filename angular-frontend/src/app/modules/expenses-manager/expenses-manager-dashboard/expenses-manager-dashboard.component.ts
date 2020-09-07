import {Component} from '@angular/core';
import {AddExpenseFormComponent} from "../tab-contents/forms/add-expense-form/add-expense-form.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './expenses-manager-dashboard.component.html',
  styleUrls: ['./expenses-manager-dashboard.component.scss']
})
export class ExpensesManagerDashboardComponent {
  dashboardTitle: string = "Expenses Manager";

  openAddExpenseFormDialog(): void {
    this.dialog.open(AddExpenseFormComponent, {
      width: '500px',
    });
  }

  constructor(public dialog: MatDialog,public router: Router) {}
}
