import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../identity-manager/services/auth.service";
import {Expense} from "../types/expense";
import {environment} from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";


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

  addExpense = (expense: Expense) : Observable<BackendResponse> => {
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/expenses/add-expense`, expense,
      {headers: this.authService.addAuthorizedHeader()});
  }

  editExpense = (expense: Expense, _id: string) : Observable<BackendResponse> => {
    return this.httpClient.patch<BackendResponse>(`${environment.backendUrl}/expenses/edit-expense/${_id}`, {expense},
      {headers: this.authService.addAuthorizedHeader()})
  }

  getAllExpenses = () : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-all-expenses`,
      {headers: this.authService.addAuthorizedHeader()});
  }

  deleteExpense = (_id: string) : Observable<BackendResponse> => {
    return this.httpClient.delete<BackendResponse>(`${environment.backendUrl}/expenses/delete-expense/${_id}`,
      {headers: this.authService.addAuthorizedHeader()})
  }

  getDailyExpensesInDateRange = (startDate: Date, endDate: Date) : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-daily-expenses-in-range`,
      {
        headers: this.authService.addAuthorizedHeader(),
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      })
  }

  findAllDistinctItems = (startDate: Date, endDate: Date) : Observable<BackendResponse> =>
    this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/find-all-distinct-items`,
    {
      headers: this.authService.addAuthorizedHeader(),
      params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
    });


  getExpensesByItem = (item: string, startDate: Date, endDate: Date) : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-expenses-by-item/${item}`,
      {
        headers: this.authService.addAuthorizedHeader(),
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      });
  }
}
