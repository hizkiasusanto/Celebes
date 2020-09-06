import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {RegisterFormData} from "../types/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  hidePassword: boolean = true;

  constructor(private snackBar: MatSnackBar,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home'])
    }
  }

  submit() : void {
    if (!this.isFormValid()) {
      this.snackBar.open("Invalid registration form!", "Close",{
        duration: 2000,
        panelClass: ['error-snackbar'],
        horizontalPosition: "end"
      })
      return
    }

    const user : RegisterFormData = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }
    this.authService.registerUser(user).subscribe((res: BackendResponse) => {
      if (res.success) {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['success-snackbar'],
          horizontalPosition: "end"
        });
        this.router.navigate(['identity/login']);
      } else {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        });
      }

    });
  }

  private isFormValid() : boolean {
    return this.name.valid && this.email.valid && this.password.valid
  }
}
