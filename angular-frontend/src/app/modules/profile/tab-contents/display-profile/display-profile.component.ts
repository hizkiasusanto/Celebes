import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss']
})
export class DisplayProfileComponent implements OnInit {
  user: any;

  showAlert = true;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.authService.userSubject.subscribe(user => this.user = user);
  }

  closeAlert = () => this.showAlert = false;

  editProfile = () => {
    let dialog = this.dialog.open(EditProfileComponent, {
      width: '500px',
    });
    dialog.componentInstance.user = this.user;

    dialog.afterClosed().subscribe(() => window.location.reload())
  }
}
