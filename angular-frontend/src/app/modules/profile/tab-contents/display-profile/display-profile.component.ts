import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {User} from "../../../identity-manager/types/user";
import {DateOnly} from "../../../../shared/types/date";

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss'],
})
export class DisplayProfileComponent implements OnInit {
  user: User;
  dateOfBirthInputString: string;

  showAlert = true;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => {
      this.user = user;
      if (user) {
        this.dateOfBirthInputString = this.user.dateOfBirth === null ? 'Not set yet' :
          new DateOnly(this.user.dateOfBirth).displayDate();
      }
    });
  }

  closeAlert = (): void => {
    this.showAlert = false
  }

  editProfile = (): void => {
    let dialog = this.dialog.open(EditProfileComponent, {
      width: '500px',
    });
    dialog.componentInstance.user = this.user;
  }
}
