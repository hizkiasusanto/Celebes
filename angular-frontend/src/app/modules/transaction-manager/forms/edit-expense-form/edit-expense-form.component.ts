import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../../expense";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../identity-manager/auth.service";
import {ExpensesService} from "../../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-expense-form',
  templateUrl: './edit-expense-form.component.html',
  styleUrls: ['./edit-expense-form.component.scss']
})
export class EditExpenseFormComponent implements OnInit {

  @Input() expense: Expense;
  @Input() _id;

  loggedInUser;
  units = ['kg', 'pcs', 'bottles']

  expensesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditExpenseFormComponent>
  ) {}

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.loggedInUser = user);
    this.expensesForm = this.formBuilder.group({
      item: [this.expense.item, [Validators.required]],
      supplier: [this.expense.supplier, [Validators.required]],
      amount: [this.expense.amount, [Validators.required]],
      unit: [this.expense.unit, [Validators.required]],
      pricePerUnit: [this.expense.pricePerUnit, [Validators.required]],
      totalPrice: [this.expense.totalPrice, [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    this.authService.userSubject.unsubscribe();
}

  private lastChanged: string;
  changeLastChanged(controlName: string) {
    this.lastChanged = controlName;
  }

  onAmountChange() {
    if (this.lastChanged == 'amount') {
      if (this.expensesForm.value.pricePerUnit) {
        this.expensesForm.patchValue({'totalPrice': this.expensesForm.value.amount * this.expensesForm.value.pricePerUnit})
      } else if (this.expensesForm.value.totalPrice) {
        this.expensesForm.patchValue({'pricePerUnit': this.expensesForm.value.totalPrice / this.expensesForm.value.amount})
      }
    }
  }

  onPricePerUnitChange() {
    if (this.lastChanged == 'pricePerUnit')
      this.expensesForm.patchValue({'totalPrice': this.expensesForm.value.pricePerUnit * this.expensesForm.value.amount})
  }

  onTotalPriceChange() {
    if (this.lastChanged == 'totalPrice' && this.expensesForm.value.amount) {
      this.expensesForm.patchValue({'pricePerUnit': this.expensesForm.value.totalPrice / this.expensesForm.value.amount})
    }
  }

  submit() {
    if (this.expensesForm.valid) {
      let expense = <Expense>{
        item: this.expensesForm.value.item,
        supplier: this.expensesForm.value.supplier,
        amount: this.expensesForm.value.amount,
        unit: this.expensesForm.value.unit,
        pricePerUnit: this.expensesForm.value.pricePerUnit,
        totalPrice: this.expensesForm.value.totalPrice,

        dateOfExpense: this.expense.dateOfExpense,
        submittedBy: this.loggedInUser.name
      }
      this.expensesService.editExpense(expense, this.expense['_id']).subscribe((res: any) => {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: [res.success ? 'success-snackbar' : 'error-snackbar'],
          horizontalPosition: "end"
        });
        this.expensesService.toggleRefresh();
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Something wrong has happened", "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        })
      });
    } else {
      return;
    }
  }
}
