import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../identity-manager/types/user";
import {AuthService} from "../../../identity-manager/services/auth.service";
import {UnitOfMeasurement} from "../../../../shared/types/unit-of-measurement";
import {requiredFileType} from "../../../../shared/services/images.service";

@Component({
  selector: 'app-add-expense-stepper',
  templateUrl: './add-expense-stepper.component.html',
  styleUrls: ['./add-expense-stepper.component.scss']
})
export class AddExpenseStepperComponent implements OnInit {
  user: User;
  createExpense(): FormGroup {
    return new FormGroup({
      'item': new FormControl(undefined,Validators.required),
      'supplier': new FormControl(undefined,Validators.required),
      'amount': new FormControl(undefined,Validators.required),
      'unit': new FormControl(UnitOfMeasurement.Kg),
      'pricePerUnit': new FormControl(undefined,Validators.required),
      'totalPrice': new FormControl(undefined,Validators.required)
    });
  }

  addRow(): void {
    const expenses = this.addExpensesForm.get('expenses') as FormArray
    expenses.push(this.createExpense())
  }

  deleteRow(index: number) : void {
    const expenses = this.addExpensesForm.get('expenses') as FormArray
    expenses.removeAt(index)
  }

  addExpensesForm: FormGroup = new FormGroup({
    'invoice': new FormControl(null, [Validators.required, requiredFileType(['png','jpg','jpeg'])]),
    'expenses': new FormArray([
      this.createExpense()
    ], [Validators.required])
  })

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.user = user);
  }

}
