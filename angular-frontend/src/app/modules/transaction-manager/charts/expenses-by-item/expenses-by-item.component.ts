import {Component, OnInit} from '@angular/core';
import {ExpensesService} from "../../services/expenses.service";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Label} from "ng2-charts";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DateService} from "../../../../shared/services/date.service";
import {RupiahPipe} from "../../../../shared/pipes/rupiah.pipe";

@Component({
  selector: 'app-expenses-by-item',
  templateUrl: './expenses-by-item.component.html',
  styleUrls: ['./expenses-by-item.component.scss']
})
export class ExpensesByItemComponent implements OnInit {
  startDate: Date = this.dateService.addDays(this.dateService.today(), -7);
  endDate: Date = this.dateService.today();

  expensesData = [];

  public chartData: ChartDataSets[] = [
    {data: this.expensesData.map(x => x.expense),},
  ];
  private datasetSubject = new BehaviorSubject(this.chartData);
  public chartLabels: Label[] = this.expensesData.map(x => x.item);
  public chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          labelString: 'Item',
          display: true
        }
      }],
      yAxes: [{
        scaleLabel: {labelString: 'Amount spent', display: true},
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 10,
          callback: function (value) {
            return new RupiahPipe().transform(value).toString();
          }
        }
      }]
    }
  };

  constructor(private expensesService: ExpensesService, private snackBar: MatSnackBar, private dateService: DateService) {
  }

  ngOnInit(): void {
    this.datasetSubject.asObservable().subscribe(() => {
      this.chartData = [{
        data: this.expensesData.map(x => x.expense),
        backgroundColor: this.expensesData.map(x => x.expense > 1000000 ? 'rgba(200,0,0,0.3)' : 'rgba(34,139,34,0.3)')
      }];
      this.chartLabels = this.expensesData.map(x => x.item);
    })
    this.expensesService.refreshSubject.subscribe(this.updateChartData);
  }

  listenToStartDate = ($event) => {
    this.startDate = $event;
    this.updateChartData()
  }

  listenToEndDate = ($event) => {
    this.endDate = $event;
    this.updateChartData()
  }

  updateChartData = () => {
    this.expensesData = [];
    this.expensesService.findAllDistinctItems(this.startDate, this.endDate).subscribe((res: any) => {
      if (res.items.length === 0) {
        this.datasetSubject.next(this.expensesData)
      }
      res.items.forEach(this.updateItemData);
    })
  }

  updateItemData = (item) => {
    this.expensesService.getExpensesByItem(item, this.startDate, this.endDate).subscribe((res: any) => {
      if (res.success) {
        let indexOfExisting = this.expensesData.map(e => e.item).indexOf(item);
        if (indexOfExisting == -1) {
          this.expensesData.push({item: item, expense: res.expense})
        } else if (this.expensesData[indexOfExisting].expense != res.expense) {
          this.expensesData[indexOfExisting].expense = res.expense;
        }
      } else {
        this.snackBar.open(res.msg, "Close", {
          duration: 2000,
          panelClass: ['error-snackbar'],
          horizontalPosition: "end"
        })
      }
      this.datasetSubject.next(this.expensesData);
    })
  }
}
