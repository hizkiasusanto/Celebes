import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Expense} from "../../expense";
import {AuthService} from "../../../identity-manager/auth.service";
import {ExpensesService} from "../../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit {
  loggedInUser;
  units = ['kg', 'pcs', 'bottles']

  expensesForm: FormGroup = this.formBuilder.group({
    item: [undefined, [Validators.required]],
    supplier: [undefined, [Validators.required]],
    amount: [undefined, [Validators.required]],
    unit: [this.units[0], [Validators.required]],
    pricePerUnit: [undefined, [Validators.required]],
    totalPrice: [undefined, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddExpenseFormComponent>
  ) {
    this.authService.getProfile().subscribe(user => {
      this.loggedInUser = user;
    })
  }

  ngOnInit(): void {
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
        dateOfExpense: new Date(),
        submittedBy: this.loggedInUser.name
      }
      this.expensesService.addExpense(expense).subscribe((res:any) => {
        this.snackBar.open(res.msg, "Close", {
            duration: 2000,
            panelClass: [res.success ? 'success-snackbar' : 'error-snackbar'],
            horizontalPosition: "end"
          });
        this.expensesService.toggleRefresh();
        this.dialogRef.close();
      });
    } else {
      return;
    }
  }
}
