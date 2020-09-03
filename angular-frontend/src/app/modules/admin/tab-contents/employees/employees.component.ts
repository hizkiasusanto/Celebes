import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  users: any[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllUsers().subscribe((res:any) => {
      console.table(res.users);
    })
  }

}
