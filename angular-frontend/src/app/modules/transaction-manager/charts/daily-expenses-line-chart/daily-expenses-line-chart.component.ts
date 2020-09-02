import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Label} from "ng2-charts";
import {DateService} from "../../../../shared/services/date.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RupiahPipe} from "../../../../shared/pipes/rupiah.pipe";

@Component({
  selector: 'app-daily-expenses-line-chart',
  templateUrl: './daily-expenses-line-chart.component.html',
  styleUrls: ['./daily-expenses-line-chart.component.scss']
})
export class DailyExpensesLineChartComponent implements OnInit {
  startDate: Date;
  endDate: Date;

  expensesData = [];

  public chartData: ChartDataSets[];
  public chartLabels: Label[];
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          labelString: 'Date',
          display: true
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        scaleLabel: {labelString:'Amount spent',display: true},
        ticks: {
          maxTicksLimit: 10,
          callback: function(value) {
            return new RupiahPipe().transform(value).toString();
          }
        }
      }]
    }
  };

  constructor(private expensesService: ExpensesService, private dateService: DateService, private snackBar: MatSnackBar) {
    this.startDate = this.dateService.addDays(this.dateService.today(), -7)
    this.endDate = this.dateService.today();
  }

  isLoading = false;

  ngOnInit(): void {
    this.expensesService.refreshSubject.subscribe(this.updateChartData);
  }

  listenToStartDate = ($event) => {
    this.startDate = $event;
    if (this.endDate !== undefined) this.updateChartData();
  }

  listenToEndDate = ($event) => {
    this.endDate = $event;
    if (this.startDate !== undefined) this.updateChartData();
  }


  updateChartData = () => {
    if (!this.isLoading) {
      this.isLoading = true
      this.expensesService.getDailyExpensesInDateRange(this.startDate, this.endDate)
        .subscribe((res: any) => {
          if (res.success) {
            this.expensesData = res.expenses.sort((a, b) => {
              return new Date(a.date).getTime() - new Date(b.date).getTime()
            });

            this.chartData = [{data: this.expensesData.map(x => x.expense)}];
            this.chartLabels = this.expensesData.map(x => new Date(x.date).toLocaleDateString('en-GB'));
          } else {
            this.snackBar.open(res.msg, "Close", {
              duration: 2000,
              panelClass: ['error-snackbar'],
              horizontalPosition: "end"
            })
          }
          this.isLoading = false;
        })

    }
  }
}
