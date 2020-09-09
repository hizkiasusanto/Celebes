import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ExpensesService} from "../../../services/expenses.service";
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Label} from "ng2-charts";
import {DateService} from "../../../../../shared/services/date.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RupiahPipe} from "../../../../../shared/pipes/rupiah.pipe";
import * as moment from 'moment';
import {BackendResponse} from "../../../../../shared/types/backendresponse";

@Component({
  selector: 'app-daily-expenses-line-chart',
  templateUrl: './daily-expenses-line-chart.component.html',
  styleUrls: ['./daily-expenses-line-chart.component.scss']
})
export class DailyExpensesLineChartComponent implements OnInit, OnChanges {
  @Input() startDate: Date;
  @Input() endDate: Date;
  isLoading: boolean = false;

  expensesData: { date: Date, expense: number }[] = [];

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
        scaleLabel: {labelString: 'Amount spent', display: true},
        ticks: {
          maxTicksLimit: 10,
          callback: (value: number|string) => new RupiahPipe().transform(value).toString()
        }
      }]
    }
  };

  constructor(
    private expensesService: ExpensesService,
    private dateService: DateService,
    private snackBar: MatSnackBar
  ) {}


  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.startDate && this.endDate) this.updateChartData()
  }

  greaterThanZero(val) {return val > 0}

  updateChartData = (): void => {
    if (!this.isLoading) {
      this.isLoading = true
      this.expensesService.getDailyExpensesInDateRange(this.startDate, this.endDate)
        .subscribe((res: BackendResponse) => {
          if (res.success) {
            this.expensesData = res.expenses.sort(sortByDate);
            this.chartData = [{data: this.expensesData.map(x => x.expense)}];
            this.chartLabels = this.expensesData.map(x => moment(x.date).format('D MMM'));
          } else {
            this.snackBar.open(res.msg, "", {
              panelClass: ['error-snackbar']
            })
          }
          this.isLoading = false;
        })

    }
  }
}

const sortByDate : Function = (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
