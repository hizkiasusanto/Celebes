import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../identity-manager/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getInvoiceById = (_id: string) : Observable<BackendResponse> =>
    this.http.get<BackendResponse>(`${environment.backendUrl}/invoices/get-invoice/${_id}`,
    {headers: this.authService.addAuthorizedHeader()})
}
