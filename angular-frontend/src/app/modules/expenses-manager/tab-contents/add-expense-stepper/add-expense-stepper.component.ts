import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../identity-manager/types/user";
import {AuthService} from "../../../identity-manager/services/auth.service";

@Component({
  selector: 'app-add-expense-stepper',
  templateUrl: './add-expense-stepper.component.html',
  styleUrls: ['./add-expense-stepper.component.scss']
})
export class AddExpenseStepperComponent implements OnInit {
  user: User;
  addExpensesForm: FormGroup = new FormGroup({
    'invoice': new FormControl(null, Validators.required)
  })

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.user = user);
  }

}
