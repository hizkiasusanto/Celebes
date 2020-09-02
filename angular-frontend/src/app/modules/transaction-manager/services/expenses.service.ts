import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../identity-manager/auth.service";
import {Expense} from "../expense";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  refreshSubject = new BehaviorSubject(null);


  toggleRefresh() {
    this.refreshSubject.next(null);
  }

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  addExpense = (expense: Expense) => {
    return this.httpClient.post(`${environment.backendUrl}/expenses/add-expense`, expense,
      {headers: this.authService.addAuthorizedHeader()});
  }

  editExpense = (expense: Expense, _id) => {
    return this.httpClient.patch(`${environment.backendUrl}/expenses/edit-expense/${_id}`, {expense},
      {headers: this.authService.addAuthorizedHeader()})
  }

  getAllExpenses = () => {
    return this.httpClient.get(`${environment.backendUrl}/expenses/get-all-expenses`,
      {headers: this.authService.addAuthorizedHeader()});
  }

  deleteExpense = (_id) => {
    return this.httpClient.delete(`${environment.backendUrl}/expenses/delete-expense/${_id}`,
      {headers: this.authService.addAuthorizedHeader()})
  }

  getDailyExpensesInDateRange = (startDate, endDate) => {
    return this.httpClient.get(`${environment.backendUrl}/expenses/get-daily-expenses-in-range`,
      {
        headers: this.authService.addAuthorizedHeader(),
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      })
  }

  findAllDistinctItems = (startDate, endDate) => this.httpClient.get(`${environment.backendUrl}/expenses/find-all-distinct-items`,
    {
      headers: this.authService.addAuthorizedHeader(),
      params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
    });


  getExpensesByItem = (item, startDate, endDate) => {
    return this.httpClient.get(`${environment.backendUrl}/expenses/get-expenses-by-item/${item}`,
      {
        headers: this.authService.addAuthorizedHeader(),
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      });
  }
}
