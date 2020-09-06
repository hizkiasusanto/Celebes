import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {DatePipe} from "@angular/common";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";

const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'D MMMM YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class DisplayProfileComponent implements OnInit {
  user: any;

  showAlert = true;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => {
      this.user = user;
      this.user.dateOfBirth = new DatePipe('en-GB').transform(new Date(this.user.dateOfBirth.year,this.user.dateOfBirth.month,this.user.dateOfBirth.date),'d MMMM yyyy')
    });
  }

  closeAlert = () => this.showAlert = false;

  editProfile = () => {
    let dialog = this.dialog.open(EditProfileComponent, {
      width: '500px',
    });
    dialog.componentInstance.user = this.user;
  }
}
