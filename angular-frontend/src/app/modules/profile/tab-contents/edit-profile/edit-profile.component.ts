import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProfileService} from "../../services/profile.service";
import {AuthService} from "../../../identity-manager/services/auth.service";
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
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class EditProfileComponent implements OnInit {
  @Input() user;
  editProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private dialogRef: MatDialogRef<EditProfileComponent>,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.editProfileForm = this.formBuilder.group({
      jobTitle: [this.user.jobTitle, [Validators.required]],
      dateOfBirth: [new Date(this.user.dateOfBirth), [Validators.required]],
      address: [this.user.address, [Validators.required]]
    })
  }

  submit() {
    if (this.editProfileForm.valid) {
      let newData = {
        jobTitle: this.editProfileForm.value.jobTitle,
        dateOfBirth: {
          date: this.editProfileForm.value.dateOfBirth.date(),
          month: this.editProfileForm.value.dateOfBirth.month(),
          year: this.editProfileForm.value.dateOfBirth.year()
        },
        address: this.editProfileForm.value.address
      }
      this.profileService.editProfile(this.user._id, newData).subscribe((res: any) => {
        if (res.success) {
          this.authService.userSubject.next(res.user)
          this.snackBar.open("Profile edited successfully","Close", {
            duration: 2000,
            panelClass: ['success-snackbar'],
            horizontalPosition: "end"
          })
          this.dialogRef.close()
        } else {
          this.snackBar.open(res.msg, "Close", {
            duration: 2000,
            panelClass: ['error-snackbar'],
            horizontalPosition: "end"
          })
        }
      })
    }
  }
}
