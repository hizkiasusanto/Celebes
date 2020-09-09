import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './expenses-manager-dashboard.component.html',
  styleUrls: ['./expenses-manager-dashboard.component.scss']
})
export class ExpensesManagerDashboardComponent {
  dashboardTitle: string = "Expenses Manager";

  constructor(public dialog: MatDialog,public router: Router) {}
}
