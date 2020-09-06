import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @Input() user;
  editProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      jobTitle: [this.user.jobTitle, [Validators.required]],
      dateOfBirth: [this.user.dateOfBirth, [Validators.required]],
      address: [this.user.address, [Validators.required]]
    })
  }

}
