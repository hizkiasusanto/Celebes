import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../modules/identity-manager/services/auth.service";

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
    this.authService.userSubject.subscribe(user => this.name = user == null ? '' : user.name);
  }

  isLoggedIn = () : boolean => this.authService.isLoggedIn()

}
