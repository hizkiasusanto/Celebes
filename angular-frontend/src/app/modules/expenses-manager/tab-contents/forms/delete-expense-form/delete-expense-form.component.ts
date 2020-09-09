import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ExpensesService} from "../../../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-expense-form',
  templateUrl: './delete-expense-form.component.html',
  styleUrls: ['./delete-expense-form.component.scss']
})
export class DeleteExpenseFormComponent implements OnInit {
  @Input() _id: string;
  isSubmitting: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<DeleteExpenseFormComponent>,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  goBack() : void {
    this.dialogRef.close();
  }

  confirmDelete() : void {
    this.isSubmitting = true;
    this.expensesService.deleteExpense(this._id).subscribe((res: any) => {
      if (res.success) {
        this.snackBar.open("Expense deleted successfully", "", {
          panelClass: ['success-snackbar']
        })
        this.dialogRef.close();
      } else {
        this.snackBar.open(res.msg, "", {
          panelClass: ['error-snackbar']
        })
        this.isSubmitting = false;
      }
    });
  }
}
