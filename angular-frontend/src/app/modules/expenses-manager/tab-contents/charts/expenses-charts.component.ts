import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-charts',
  templateUrl: './expenses-charts.component.html',
  styleUrls: ['./expenses-charts.component.scss']
})
export class ExpensesChartsComponent implements OnInit {
  startDate: Date;
  endDate: Date;

  constructor() { }

  ngOnInit(): void {
  }

  listenToStartDate = $event => this.startDate = $event;

  listenToEndDate = $event => this.endDate = $event;
}
