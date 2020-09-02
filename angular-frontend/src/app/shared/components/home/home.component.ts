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
  ) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.getProfile().subscribe((profile: any) => this.name = profile.name);
    }
  }

}
