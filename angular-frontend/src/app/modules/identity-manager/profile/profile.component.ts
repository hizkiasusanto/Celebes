import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

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
    this.authService.userSubject.subscribe(user => this.user = user);
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    console.log(file)
  }
}
