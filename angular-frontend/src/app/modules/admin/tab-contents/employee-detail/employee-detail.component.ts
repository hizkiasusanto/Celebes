import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  user;
  id;

  jobTitleReadonly: boolean = true;
  newJobTitle: string;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.employeeService.getUserById(this.id).subscribe((res: any) => {
      if (res.success) {
        this.user = res.user;
        this.newJobTitle = res.user.jobTitle || res.user.role;
      } else {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        })
      }
    })
  }

  goBack = () => this.location.back()

  approveUser = () => {
    this.employeeService.approveUser(this.id).subscribe((res: any) => {
      this.snackBar.open(res.msg, "Close", {
        duration: 2000,
        panelClass: [res.success ? 'success-snackbar' : 'error-snackbar'],
        horizontalPosition: 'end'
      })
    })
    this.goBack()
  };

  updateJobTitle = () => {
    this.employeeService.updateJobTitle(this.id, this.newJobTitle).subscribe((res: any) => {
      this.snackBar.open(res.msg, "Close", {
        duration: 2000,
        panelClass: [res.success ? 'success-snackbar' : 'error-snackbar'],
        horizontalPosition: 'end'
      })
      if (res.success) {
        this.goBack()
      }
    })
  }

}
