import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../identity-manager/types/user";
import {AuthService} from "../../../identity-manager/services/auth.service";
import {UnitOfMeasurement} from "../../../../shared/types/unit-of-measurement";
import {ImagesService, requiredFileType} from "../../../../shared/services/images.service";
import {HttpEventType} from "@angular/common/http";
import {of, Subscription} from "rxjs";
import {filter, switchMap} from "rxjs/operators";
import {BackendResponse} from "../../../../shared/types/backendresponse";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Expense} from "../../types/expense";
import {ExpensesService} from "../../services/expenses.service";
import {Invoice} from "../../types/invoice";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-expense-stepper',
  templateUrl: './add-expense-stepper.component.html',
  styleUrls: ['./add-expense-stepper.component.scss']
})
export class AddExpenseStepperComponent implements OnInit {
  user: User;
  userSubscription: Subscription;
  imageToUpload: string | ArrayBuffer;

  disableButton: boolean = false;
  uploadProgress: number;
  totalUploadSize: number;
  submittedExpenses: number = 0;
  totalExpenses: number;

  createExpense(): FormGroup {
    return new FormGroup({
      'item': new FormControl(undefined, Validators.required),
      'supplier': new FormControl(undefined, Validators.required),
      'amount': new FormControl(undefined, Validators.required),
      'unit': new FormControl(UnitOfMeasurement.Kg),
      'pricePerUnit': new FormControl(undefined, Validators.required),
      'totalPrice': new FormControl(undefined, Validators.required)
    });
  }

  addRow(): void {
    const expenses = this.addExpensesForm.get('expenses') as FormArray
    expenses.push(this.createExpense())
  }

  deleteRow(index: number): void {
    const expenses = this.addExpensesForm.get('expenses') as FormArray
    expenses.removeAt(index)
  }

  addExpensesForm: FormGroup = new FormGroup({
    'invoice': new FormControl(null,
      [Validators.required, requiredFileType(['png', 'jpg', 'jpeg'])]),
    'expenses': new FormArray([
      this.createExpense()
    ], [Validators.required])
  })

  constructor(
    private authService: AuthService,
    private imagesService: ImagesService,
    private expensesService: ExpensesService,
    private snackBar: MatSnackBar,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

  takeFile = (event: File): void => {
    this.addExpensesForm.patchValue({'invoice': event})
    let reader = new FileReader();
    reader.readAsDataURL(this.addExpensesForm.controls.invoice.value);

    reader.onload = () => this.imageToUpload = reader.result;
  }

  submit = () : void => {
    this.disableButton = true;
    this.totalExpenses = this.addExpensesForm.value.expenses.length;
    this.imagesService.uploadInvoice(this.addExpensesForm.value.invoice).pipe(
      switchMap(event => {
        if (event.type === HttpEventType.Response) {
          return of(event.body as BackendResponse)
        } else if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = event.loaded;
          this.totalUploadSize = event.total;
        }
        return of(null)
      }),
      filter(subject => subject !== null),
      switchMap((subject: BackendResponse) => {
        if (subject.success) {
          return of(subject.invoice)
        } else {
          this.snackBar.open(subject.msg, '', {panelClass: ['error-snackbar']})
          this.disableButton = false;
          return of(null)
        }
      }),
      filter(subject => subject != null))
      .subscribe((invoice: Invoice) => {
        this.addExpensesForm.value.expenses.map(expense => this.expensesService.addExpense(<Expense>{
          item: expense.item,
          supplier: expense.supplier,
          amount: expense.amount,
          unit: expense.unit,
          pricePerUnit: expense.pricePerUnit,
          totalPrice: expense.totalPrice,
          dateOfExpense: new Date(),
          submittedBy: this.user.name,
          invoiceId: invoice._id
        }).pipe(
          switchMap((res: BackendResponse) => {
            if (res.success) {
              return of(res.expense as Expense);
            } else {
              this.snackBar.open(res.msg, "", {
                panelClass: ['error-snackbar']
              });
              this.disableButton = false;
              return of(null)
            }
          }),
          filter(expense => expense !== null))
          .subscribe(() => {
            this.submittedExpenses++;
            if (this.submittedExpenses === this.totalExpenses) {
              this.snackBar.open("Expenses submitted successfully", "",
                {panelClass: ['success-snackbar']})
              this.router.navigate(['expensesManager'])
            }
          }))
      })
  }

  goBack =(): void => this.location.back()
}
