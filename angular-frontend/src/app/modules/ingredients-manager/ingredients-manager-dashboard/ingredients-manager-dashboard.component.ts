import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingredients-manager-dashboard',
  templateUrl: './ingredients-manager-dashboard.component.html',
  styleUrls: ['./ingredients-manager-dashboard.component.scss']
})
export class IngredientsManagerDashboardComponent implements OnInit {
  dashboardTitle: string = "Ingredients Manager"

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
