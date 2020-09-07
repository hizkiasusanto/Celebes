import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Expense} from "../../../types/expense";
import {AuthService} from "../../../../identity-manager/services/auth.service";
import {ExpensesService} from "../../../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";
import {PriceCalculatorService} from "../../../services/price-calculator.service";
import {UnitOfMeasurement} from "../../../../../shared/types/unit-of-measurement";
import {User} from "../../../../identity-manager/types/user";

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent implements OnInit {
  loggedInUser: User;
  get unitsOfMeasurement() : Array<string> {
    return Object.values(UnitOfMeasurement)
  }

  expensesForm: FormGroup = this.formBuilder.group({
    item: [undefined, [Validators.required]],
    supplier: [undefined, [Validators.required]],
    amount: [undefined, [Validators.required]],
    unit: [UnitOfMeasurement.Kg],
    pricePerUnit: [undefined, [Validators.required]],
    totalPrice: [undefined, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<AddExpenseFormComponent>,
    private priceCalculatorService: PriceCalculatorService
  ) {
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.loggedInUser = user);
  }

  private lastChanged: string;

  changeLastChanged(controlName: string) {
    this.lastChanged = controlName;
  }

  onAmountChange = () => this.priceCalculatorService.onAmountChange(this.expensesForm, this.lastChanged)

  onPricePerUnitChange = () => this.priceCalculatorService.onPricePerUnitChange(this.expensesForm, this.lastChanged)

  onTotalPriceChange = () => this.priceCalculatorService.onTotalPriceChange(this.expensesForm, this.lastChanged)

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
      this.expensesService.addExpense(expense).subscribe((res: any) => {
        this.snackBar.open(res.msg, "", {
          panelClass: [res.success ? 'success-snackbar' : 'error-snackbar']
        });
        this.expensesService.toggleRefresh();
        this.dialogRef.close();
      });
    } else {
      return;
    }
  }
}