import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
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

  viewEmployeeDetail = (id) => {
    console.log(`employee-details/${id}`)
    console.log(this.router.url)
  }
}
