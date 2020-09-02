import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {AuthService} from "../../../modules/identity-manager/auth.service";
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {
  @ViewChild('sidenav') public sidenav: MatSidenav
  @Input() public isSidenavOpen: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              public router: Router) { }

  ngOnChanges() {
    if (this.sidenav) {
      if (this.isSidenavOpen) {
        this.sidenav.open()
      } else {
        this.sidenav.close()
      }
    }
  }

  isLoggedIn = () => {
    return this.authService.isLoggedIn()
  }
}
