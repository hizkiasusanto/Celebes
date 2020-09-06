import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../identity-manager/services/auth.service";

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.user = user);
  }
}
