import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProfileService} from "../../services/profile.service";
import {AuthService} from "../../../identity-manager/services/auth.service";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {DEFAULT_DATE_FORMATS} from "../../../../shared/config/datepicker-format";
import {convertToDateOnly, DateOnly} from "../../../../shared/types/date";
import {BackendResponse} from "../../../../shared/types/backendresponse";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DEFAULT_DATE_FORMATS},
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
      dateOfBirth: [this.user.dateOfBirth === null ? null :
        new DateOnly(this.user.dateOfBirth).toDate(), [Validators.required]],
      address: [this.user.address, [Validators.required]]
    })
  }

  submit() {
    if (this.editProfileForm.valid) {
      let newData = {
        jobTitle: this.editProfileForm.value.jobTitle,
        dateOfBirth: convertToDateOnly(this.editProfileForm.value.dateOfBirth),
        address: this.editProfileForm.value.address
      }
      this.profileService.editProfile(this.user._id, newData).subscribe((res: BackendResponse) => {
        if (res.success) {
          this.authService.userSubject.next(res.user)
          this.snackBar.open("Profile edited successfully","", {panelClass: ['success-snackbar']})
          this.dialogRef.close()
        } else {
          this.snackBar.open(res.msg, "", {panelClass: ['error-snackbar']})
        }
      })
    }
  }
}
