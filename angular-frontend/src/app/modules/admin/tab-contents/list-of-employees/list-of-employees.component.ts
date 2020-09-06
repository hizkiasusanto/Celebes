import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";
import {Role} from "../../../identity-manager/types/role";
import {BackendResponse} from "../../../../shared/types/backendresponse";
import {User} from "../../../identity-manager/types/user";

@Component({
  selector: 'app-list-of-employees',
  templateUrl: './list-of-employees.component.html',
  styleUrls: ['./list-of-employees.component.scss']
})
export class ListOfEmployeesComponent implements OnInit {
  users: User[];
  managers: User[];
  employees: User[];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getAllUsers().subscribe((res:BackendResponse) => {
      this.users = res.users;
      this.managers = this.users.filter(x => x.role !== Role.Employee)
      this.employees = this.users.filter(x => x.role === Role.Employee)
    })
  }

  viewEmployeeDetails = (id: string) : void => {
    this.router.navigate([`adminDashboard/employee-details/${id}`])
  }
}
