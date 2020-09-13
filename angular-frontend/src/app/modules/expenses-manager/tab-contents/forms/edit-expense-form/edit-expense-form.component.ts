import {Component, Input, OnInit} from '@angular/core';
import {Expense} from "../../../types/expense";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../identity-manager/services/auth.service";
import {ExpensesService} from "../../../services/expenses.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";
import {PriceCalculatorService} from "../../../services/price-calculator.service";
import {User} from "../../../../identity-manager/types/user";
import {UnitOfMeasurement} from "../../../../../shared/types/unit-of-measurement";
import {Subscription} from "rxjs";
import {Ingredient} from "../../../../ingredients-manager/types/ingredient";
import {IngredientsService} from "../../../../ingredients-manager/services/ingredients.service";

@Component({
  selector: 'app-edit-expense-form',
  templateUrl: './edit-expense-form.component.html',
  styleUrls: ['./edit-expense-form.component.scss']
})
export class EditExpenseFormComponent implements OnInit {
  @Input() expense: Expense;
  @Input() _id: string;
  isSubmitting: boolean = false;
  private lastChanged: string;
  private subscription: Subscription

  loggedInUser: User;
  get unitsOfMeasurement() : Array<string> {
    return Object.values(UnitOfMeasurement)
  }

  listOfIngredients: Ingredient[]

  expensesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditExpenseFormComponent>,
    private priceCalculatorService: PriceCalculatorService,
    private ingredientsService: IngredientsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.userSubject.subscribe(user => this.loggedInUser = user);
    this.expensesForm = this.formBuilder.group({
      item: [this.expense.item, [Validators.required]],
      supplier: [this.expense.supplier, [Validators.required]],
      amount: [this.expense.amount, [Validators.required]],
      unit: [this.expense.unit, [Validators.required]],
      pricePerUnit: [this.expense.pricePerUnit, [Validators.required]],
      totalPrice: [this.expense.totalPrice, [Validators.required]]
    })
    this.ingredientsService.getAllIngredients().subscribe(res => {
      if (res.success) {
        this.listOfIngredients = res.ingredients
      } else {
        this.snackBar.open(res.msg,'',{panelClass:['error-snackbar']})
      }
    })
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe()
  }

  changeLastChanged(controlName: string) {
    this.lastChanged = controlName;
  }

  onAmountChange = () : void => this.priceCalculatorService.onAmountChange(this.expensesForm, this.lastChanged)

  onPricePerUnitChange = () : void => this.priceCalculatorService.onPricePerUnitChange(this.expensesForm, this.lastChanged)

  onTotalPriceChange = () : void => this.priceCalculatorService.onTotalPriceChange(this.expensesForm, this.lastChanged)

  submit() : void {
    if (this.expensesForm.valid) {
      this.isSubmitting = true;
      let expense = <Expense>{
        item: this.expensesForm.value.item,
        supplier: this.expensesForm.value.supplier,
        amount: this.expensesForm.value.amount,
        unit: this.expensesForm.value.unit,
        pricePerUnit: this.expensesForm.value.pricePerUnit,
        totalPrice: this.expensesForm.value.totalPrice,

        dateOfExpense: this.expense.dateOfExpense,
        submittedBy: this.loggedInUser.name,
        invoiceId: this.expense.invoiceId
      }
      this.expensesService.editExpense(expense, this.expense['_id']).subscribe((res: any) => {
        this.snackBar.open(res.msg, "", {
          panelClass: [res.success ? 'success-snackbar' : 'error-snackbar'],
        });
        this.dialogRef.close();
      }, () => {
        this.snackBar.open("Something wrong has happened", "", {
          panelClass: ['error-snackbar']
        })
        this.isSubmitting = false;
      });
    } else {
      return;
    }
  }
}
