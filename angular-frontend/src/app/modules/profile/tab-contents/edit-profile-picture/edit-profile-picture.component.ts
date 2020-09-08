import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../identity-manager/types/user";
import {MatDialogRef} from "@angular/material/dialog";
import {ImagesService} from "../../../../shared/services/images.service";
import {BackendResponse} from "../../../../shared/types/backendresponse";
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile-picture',
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss']
})
export class EditProfilePictureComponent implements OnInit {
  @Input() user: User
  currentImageUrl: string
  fileToUpload: File
  imageToUpload: string | ArrayBuffer;

  errorMessage: string;

  constructor(
    private imagesService: ImagesService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditProfilePictureComponent>
  ) { }

  ngOnInit(): void {
    this.currentImageUrl = this.imagesService.getProfilePicture(this.user.profilePicUrl)
  }

  selectFile = event => {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.errorMessage = 'You must select an image';
      setTimeout(() => this.errorMessage = '', 2000);
      return;
    }

    if(event.target.files[0].type.match(/image\/*/) == null) {
      this.errorMessage = "Only images are supported";
      setTimeout(() => this.errorMessage = "", 2000);
      return;
    }

    if(event.target.files[0].size > (1 << 20)) {
      this.errorMessage = "File size must be less than 1MB";
      setTimeout(() => this.errorMessage = "", 2000);
      return;
    }

    this.fileToUpload = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);

    reader.onload = () => this.imageToUpload = reader.result;
  }

  uploadFile = () : void => {
    this.imagesService.uploadProfilePicture(this.fileToUpload).subscribe((res:BackendResponse) => {
      if (res.success) {
        this.authService.userSubject.next(res.user)
        this.snackBar.open("Profile picture edited successfully","", {panelClass: ['success-snackbar']})
        this.dialogRef.close()
      } else {
        this.snackBar.open(res.msg, "", {panelClass: ['error-snackbar']})
      }
    })
  }

  cancel = () : void => this.dialogRef.close()
}
