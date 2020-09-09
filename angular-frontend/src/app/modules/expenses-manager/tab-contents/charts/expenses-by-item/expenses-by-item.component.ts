import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ExpensesService} from "../../../services/expenses.service";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Label} from "ng2-charts";
import {BehaviorSubject, forkJoin, Observable, of, Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RupiahPipe} from "../../../../../shared/pipes/rupiah.pipe";
import {BackendResponse} from "../../../../../shared/types/backendresponse";
import {filter, map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-expenses-by-item',
  templateUrl: './expenses-by-item.component.html',
  styleUrls: ['./expenses-by-item.component.scss']
})
export class ExpensesByItemComponent implements OnInit, OnChanges {
  @Input() startDate: Date;
  @Input() endDate: Date;
  isLoading: boolean = false;

  expensesData: { item: string, expense: number }[] = [];
  private datasetSubject = new BehaviorSubject(this.expensesData);
  subscription: Subscription;

  public chartData: ChartDataSets[] = [{data: this.expensesData.map(x => x.expense)}];
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
          callback: (value: number) => new RupiahPipe().transform(value)
        }
      }]
    }
  };

  constructor(private expensesService: ExpensesService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.subscription = this.datasetSubject.subscribe(() => {
      this.chartData = [{
        data: this.expensesData.map(x => x.expense),
        backgroundColor: this.expensesData.map(x => x.expense > 1000000 ? 'rgba(200,0,0,0.3)' : 'rgba(34,139,34,0.3)')
      }];
      this.chartLabels = this.expensesData.map(x => x.item);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnChanges(): void {
    if (this.startDate && this.endDate) this.updateChartData()
  }

  updateChartData = (): void => {
    if (!this.isLoading) {
      this.isLoading = true;
      this.expensesData = [];
      this.datasetSubject.next(this.expensesData)
      this.expensesService.findAllDistinctItems(this.startDate, this.endDate).pipe(
        switchMap((res: BackendResponse) => {
          if (res.success) {
            return of(res.items as string[])
          } else {
            this.snackBar.open(res.msg, '', {panelClass: ['error-snackbar']})
            return of(null)
          }
        })).subscribe((items: string[]) => {
        if (items && items.length > 0) {
          items.map(item => this.updateItemData(item).subscribe(result => {
            this.expensesData.push(result);
            if (this.expensesData.length === items.length) {
              this.datasetSubject.next(this.expensesData);
              this.isLoading = false;
            }
          }))
        } else {
          this.datasetSubject.next(this.expensesData);
          this.isLoading = false;
        }
      })
    }
  }


  updateItemData = (item: string): Observable<{ item: string, expense: number }> => {
    return this.expensesService.getExpensesByItem(item, this.startDate, this.endDate).pipe(map(value => {
      return {item: item, expense: value.expense}
    }));
  }

}
