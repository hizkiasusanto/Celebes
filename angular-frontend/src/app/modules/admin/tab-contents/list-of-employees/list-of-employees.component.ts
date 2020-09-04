import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {
  users: any[];
  managers: any[];
  employees: any[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllUsers().subscribe((res:any) => {
      this.users = res.users;
      this.managers = this.users.filter(x => x.role !== 'Employee')
      this.employees = this.users.filter(x => x.role === 'Employee')
    })
  }

  viewEmployeeDetails = (id) => {
    this.router.navigate([`adminDashboard/employee-details/${id}`])
  }
}
