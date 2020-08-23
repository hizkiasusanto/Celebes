import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() appBrand: string

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn = () => {
    return this.authService.isLoggedIn()
  }

  onLogoutClick = () => {
    this.authService.logout();
    this.snackBar.open("Logged out successfully", "Close", {
      duration: 2000,
      panelClass: ['success-snackbar'],
      horizontalPosition: "end"
    });
    this.router.navigate(['/home']);
    return false;
  }

}
