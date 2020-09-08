import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../identity-manager/types/user";
import {MatDialogRef} from "@angular/material/dialog";
import {ImagesService} from "../../../../shared/services/images.service";
import {AuthService} from "../../../identity-manager/services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpEventType} from "@angular/common/http";
import {BackendResponse} from "../../../../shared/types/backendresponse";

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

  isLoading: boolean = false;
  uploadProgress: number = 0;

  constructor(
    private imagesService: ImagesService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<EditProfilePictureComponent>
  ) { }

  ngOnInit(): void {
    if (this.user.profilePicUrl) {
      this.currentImageUrl = this.imagesService.getProfilePicture(this.user.profilePicUrl)
    }
  }

  selectFile = event => {
    if (!event.target.files[0] || event.target.files[0].length == 0) {

      this.snackBar.open("You must select an image","",{panelClass:['error-snackbar']})
      return;
    }

    if(event.target.files[0].type.match(/image\/*/) == null) {
      this.snackBar.open("Only images are supported","",{panelClass:['error-snackbar']})
      return;
    }

    if(event.target.files[0].size > (1 << 20)) {
      this.snackBar.open("File size must be less than 1MB","",{panelClass:['error-snackbar']})
      return;
    }

    this.fileToUpload = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);

    reader.onload = () => this.imageToUpload = reader.result;
  }

  uploadFile = () : void => {
    this.imagesService.uploadProfilePicture(this.fileToUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.uploadProgress = Math.round(event.loaded/event.total * 100);
        if (event.loaded === event.total) {
          this.isLoading = true
        }
      } else if (event.type === HttpEventType.Response) {
        this.isLoading = false
        let res: BackendResponse = event.body;
        if (res.success) {
          this.authService.userSubject.next(res.user)
          this.snackBar.open("Profile picture edited successfully","", {panelClass: ['success-snackbar']})
          this.dialogRef.close()
        } else {
          this.snackBar.open(res.msg, "", {panelClass: ['error-snackbar']})
        }
      }
    })
  }

  cancel = () : void => this.dialogRef.close()
}
