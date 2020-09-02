import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ExpensesService} from "../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-expense-form',
  templateUrl: './delete-expense-form.component.html',
  styleUrls: ['./delete-expense-form.component.scss']
})
export class DeleteExpenseFormComponent implements OnInit {
  @Input() _id;

  constructor(
    private dialogRef: MatDialogRef<DeleteExpenseFormComponent>,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.dialogRef.close();
  }

  confirmDelete() {
    this.expensesService.deleteExpense(this._id).subscribe((res: any) => {
      if (res.success) {
        this.snackBar.open("Expense deleted successfully", "Close", {
          duration: 2000,
          panelClass: ['success-snackbar'],
          horizontalPosition: "end"
        })
        this.expensesService.toggleRefresh();
        this.dialogRef.close();
      } else {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        })
      }
    });
  }
}
