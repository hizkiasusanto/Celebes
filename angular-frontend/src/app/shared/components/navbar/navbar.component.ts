import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../modules/identity-manager/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() appBrand: string

  @Output()
  openSidenav: EventEmitter<boolean> = new EventEmitter();

  clickMenu() {
    this.openSidenav.emit(true);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router,
    private breakpointObserver: BreakpointObserver
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
