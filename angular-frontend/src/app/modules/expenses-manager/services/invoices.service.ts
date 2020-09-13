import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient) { }

  getInvoiceById = (_id: string) : Observable<BackendResponse> =>
    this.http.get<BackendResponse>(`${environment.backendUrl}/invoices/get-invoice/${_id}`)
}
