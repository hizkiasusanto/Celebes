import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../modules/identity-manager/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: String;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.authService.userSubject.subscribe(user => this.name = user == null ? '' : user.name);
    }
  }

  isLoggedIn = () => this.authService.isLoggedIn()

}
