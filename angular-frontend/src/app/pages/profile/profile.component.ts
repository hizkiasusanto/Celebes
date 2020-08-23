import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile;
    }, err => {
      console.log(err);
      return false;
    })
  }

}
