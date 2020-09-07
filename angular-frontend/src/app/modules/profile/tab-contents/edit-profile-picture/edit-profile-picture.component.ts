import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../identity-manager/types/user";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-profile-picture',
  templateUrl: './edit-profile-picture.component.html',
  styleUrls: ['./edit-profile-picture.component.scss']
})
export class EditProfilePictureComponent implements OnInit {
  @Input() user: User
  fileToUpload: File
  imageToUpload;

  errorMessage: string;

  constructor(private dialogRef: MatDialogRef<EditProfilePictureComponent>) { }

  ngOnInit(): void {
  }

  selectFile = event => {
    console.log(event.target.files[0])
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
    console.log(this.fileToUpload)
  }

  cancel = () : void => this.dialogRef.close()
}
