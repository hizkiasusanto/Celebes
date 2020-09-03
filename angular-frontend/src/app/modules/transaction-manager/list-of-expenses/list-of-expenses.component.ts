import {Component, OnInit, ViewChild} from '@angular/core';
import {Expense} from "../expense";
import {MatTableDataSource} from "@angular/material/table";
import {ExpensesService} from "../services/expenses.service";
import {MatPaginator} from "@angular/material/paginator";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../identity-manager/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {EditExpenseFormComponent} from "../forms/edit-expense-form/edit-expense-form.component";
import {DeleteExpenseFormComponent} from "../forms/delete-expense-form/delete-expense-form.component";
import {DateService} from "../../../shared/services/date.service";

@Component({
  selector: 'app-list-of-expenses',
  templateUrl: './list-of-expenses.component.html',
  styleUrls: ['./list-of-expenses.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListOfExpensesComponent implements OnInit {
  displayedColumns: string[] = ['date', 'item', 'supplier', 'amount', 'pricePerUnit', 'totalPrice', 'submittedBy'];
  lastUpdated: Date;
  dataSource: MatTableDataSource<Expense>;
  expandedRow: Expense | null;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isAuthorizedToDelete: boolean;

  constructor(
    private expensesService: ExpensesService,
    private authService: AuthService,
    public dialog: MatDialog,
    private dateService: DateService) {
  }

  ngOnInit(): void {
    this.populateDataSourceWithExpenses();
    this.authService.getProfile().subscribe((profile: any) =>
      this.isAuthorizedToDelete = profile.role !== 'Employee')
    this.expensesService.refreshSubject.subscribe(() =>
      this.populateDataSourceWithExpenses()
    )
  }

  populateDataSourceWithExpenses = () => {
    this.expensesService.getAllExpenses().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.expenses);
      this.dataSource.paginator = this.paginator;
      this.lastUpdated = this.dateService.now();
    })
  }

  openEditExpenseFormDialog(row: Expense): void {
    let dialog = this.dialog.open(EditExpenseFormComponent, {
      width: '500px',
    });
    dialog.componentInstance.expense = row;

    dialog.afterClosed().subscribe(this.populateDataSourceWithExpenses);
  }

  openDeleteExpenseFormDialog(id: Expense): void {
    let dialog = this.dialog.open(DeleteExpenseFormComponent, {
      width: '500px',
    });
    dialog.componentInstance._id = id;

    dialog.afterClosed().subscribe(this.populateDataSourceWithExpenses);
  }
}
