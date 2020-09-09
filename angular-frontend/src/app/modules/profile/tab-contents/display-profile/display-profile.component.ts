import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {EditProfileComponent} from "../edit-profile/edit-profile.component";
import {User} from "../../../identity-manager/types/user";
import {DateOnly} from "../../../../shared/types/date";
import {EditProfilePictureComponent} from "../edit-profile-picture/edit-profile-picture.component";
import {ImagesService} from "../../../../shared/services/images.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.scss'],
})
export class DisplayProfileComponent implements OnInit, OnDestroy {
  user: User;
  dateOfBirthInputString: string;
  imgsrc: string;

  showAlert = true;

  constructor(
    private authService: AuthService,
    private imagesService: ImagesService,
    public dialog: MatDialog,
  ) {
  }

  subscription: Subscription
  ngOnInit(): void {
    this.subscription = this.authService.userSubject.subscribe(user => {
      this.user = user;
      if (user) {
        this.dateOfBirthInputString = this.user.dateOfBirth === null ? 'Not set yet' :
          new DateOnly(this.user.dateOfBirth).displayDate();
        if (user.profilePicUrl) {
          this.imgsrc = this.imagesService.getProfilePicture(user.profilePicUrl);
        }
      }
    });
  }

  ngOnDestroy() : void {
    this.subscription.unsubscribe()
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

  editProfilePicture = () : void => {
    let dialog = this.dialog.open(EditProfilePictureComponent,
      {width: '500px'});
    dialog.componentInstance.user = this.user;
  }
}
