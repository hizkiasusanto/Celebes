import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../modules/identity-manager/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userRole: string;

  @Input() appBrand: string

  @Output()
  openSidenav: EventEmitter<boolean> = new EventEmitter();

  clickMenu() : void {
    this.openSidenav.emit(true);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 768px)')
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
    this.authService.userSubject.subscribe(user => {
      if (user) this.userRole = this.authService.getUserRole()
    })
  }

  isLoggedIn = () : boolean => this.authService.isLoggedIn()


  onLogoutClick = () : void => {
    this.authService.logout();
    this.snackBar.open("Logged out successfully", "", {
      panelClass: ['success-snackbar']
    });
    this.router.navigate(['/']);
    return;
  }

}
