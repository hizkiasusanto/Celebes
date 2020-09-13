import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Expense} from "../types/expense";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";


@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  constructor(
    private httpClient: HttpClient,
  ) {
  }

  addExpense = (expense: Expense) : Observable<BackendResponse> => {
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/expenses/add-expense`, expense);
  }

  editExpense = (expense: Expense, _id: string) : Observable<BackendResponse> => {
    return this.httpClient.patch<BackendResponse>(`${environment.backendUrl}/expenses/edit-expense/${_id}`, {expense})
  }

  getAllExpenses = () : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-all-expenses`);
  }

  deleteExpense = (_id: string) : Observable<BackendResponse> => {
    return this.httpClient.delete<BackendResponse>(`${environment.backendUrl}/expenses/delete-expense/${_id}`)
  }

  getDailyExpensesInDateRange = (startDate: Date, endDate: Date) : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-daily-expenses-in-range`,
      {
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      })
  }

  findAllDistinctItems = (startDate: Date, endDate: Date) : Observable<BackendResponse> =>
    this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/find-all-distinct-items`,
    {
      params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
    });


  getExpensesByItem = (item: string, startDate: Date, endDate: Date) : Observable<BackendResponse> => {
    return this.httpClient.get<BackendResponse>(`${environment.backendUrl}/expenses/get-expenses-by-item/${item}`,
      {
        params: new HttpParams().set('startDate', startDate.toUTCString()).set('endDate', endDate.toUTCString())
      });
  }
}
