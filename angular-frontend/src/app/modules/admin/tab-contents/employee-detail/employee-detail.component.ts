import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../../../identity-manager/types/user";
import {BackendResponse} from "../../../../shared/types/backendresponse";
import {DateOnly} from "../../../../shared/types/date";
import {ImagesService} from "../../../../shared/services/images.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  user? : User;
  id? : string;

  isSubmitting: boolean = false;

  dateOfBirthInputString: string;
  profilePicUrl: string;

  jobTitleReadonly: boolean = true;
  newJobTitle: string;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private imagesService: ImagesService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getUserById(this.id).subscribe((res: BackendResponse) => {
      if (res.success) {
        this.user = res.user;
        this.dateOfBirthInputString = this.user.dateOfBirth === null ? 'Not set yet' :
          new DateOnly(this.user.dateOfBirth).displayDate();
        if (this.user.profilePicUrl) {
          this.profilePicUrl = this.imagesService.getProfilePicture(this.user.profilePicUrl)
        }
        this.newJobTitle = res.user.jobTitle;
      } else {
        this.snackBar.open(res.msg, "", {
          panelClass: ['error-snackbar']
        })
      }
    })
  }

  goBack = () : void => this.location.back()

  approveUser = () : void => {
    this.isSubmitting = true;
    this.employeeService.approveUser(this.id).subscribe((res: BackendResponse) => {
      this.snackBar.open(res.msg, "", {
        panelClass: [res.success ? 'success-snackbar' : 'error-snackbar']
      })
    })
    this.goBack()
  };

  updateJobTitle = () : void => {
    this.isSubmitting = true;
    this.employeeService.updateJobTitle(this.id, this.newJobTitle).subscribe((res: BackendResponse) => {
      this.snackBar.open(res.msg, "", {
        panelClass: [res.success ? 'success-snackbar' : 'error-snackbar']
      })
      if (res.success) {
        this.goBack()
      }
    })
  }

}
