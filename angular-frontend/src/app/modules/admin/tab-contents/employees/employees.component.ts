import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  users: any[];
  managers: any[];
  employees: any[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllUsers().subscribe((res:any) => {
      this.users = res.users;
      this.managers = this.users.filter(x => x.role !== 'Employee')
      this.employees = this.users.filter(x => x.role === 'Employee')
    })
  }

  viewEmployeeDetail = (id) => {
    console.log(id)
  }
}
