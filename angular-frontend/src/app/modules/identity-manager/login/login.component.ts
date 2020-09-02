import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  hidePassword: boolean = true;

  constructor(
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home'])
    }
  }

  submit() {
    const user = {
      email: this.email.value,
      password: this.password.value
    }

    this.authService.authenticateUser(user).subscribe((res:any) => {
      if (res.success) {
        this.authService.storeUserData(res.token, res.user);
        this.snackBar.open("You are now logged in", "Close",{
            duration: 2000,
            panelClass: ['success-snackbar'],
            horizontalPosition: "end"
          }
        )
        this.router.navigate(['home'])
      } else {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        });
        this.router.navigate(['login']);
      }
    })
  }
}
