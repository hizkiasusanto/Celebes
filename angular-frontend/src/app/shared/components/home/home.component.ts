import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../modules/identity-manager/services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: String;
  subscription: Subscription;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.authService.userSubject.subscribe(user => this.name = user == null ? '' : user.name);
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe()
  }

  isLoggedIn = () : boolean => this.authService.isLoggedIn()

}
