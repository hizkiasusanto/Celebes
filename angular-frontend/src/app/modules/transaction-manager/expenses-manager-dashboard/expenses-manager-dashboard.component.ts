import {Component} from '@angular/core';
import {AddExpenseFormComponent} from "../add-expense-form/add-expense-form.component";
import {TileContent} from "../tile-content";
import {ListOfExpensesComponent} from "../list-of-expenses/list-of-expenses.component";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {DailyExpensesLineChartComponent} from "../charts/daily-expenses-line-chart/daily-expenses-line-chart.component";
import {ExpensesByItemComponent} from "../charts/expenses-by-item/expenses-by-item.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './expenses-manager-dashboard.component.html',
  styleUrls: ['./expenses-manager-dashboard.component.scss']
})
export class ExpensesManagerDashboardComponent {
  dashboardTitle: string = "Expenses Manager";

  plotDailyExpensesCard: TileContent = {component:DailyExpensesLineChartComponent, title: "Daily expenses"};
  plotExpensesByItemCard: TileContent ={component:ExpensesByItemComponent, title: "Expenses by item"};
  listOfExpensesCard: TileContent = {component:ListOfExpensesComponent, title: "List of expenses"};

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if (matches) {
        return {
          columns: 2,
          chart: {cols: 2, rows: 1},
          table: {cols: 2, rows: 2}
        }
      }

      return {
        columns: 2,
        chart: {cols: 1, rows: 1},
        table: {cols: 2, rows: 2}
      }
    }));

  openAddExpenseFormDialog(): void {
    this.dialog.open(AddExpenseFormComponent, {
      width: '500px',
    });
  }

  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}
}
