import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers = (): Observable<BackendResponse> => this.httpClient.get<BackendResponse>
  (`${environment.backendUrl}/admin/get-all-users`)

  getUserById = (_id: string): Observable<BackendResponse> => this.httpClient.get<BackendResponse>
  (`${environment.backendUrl}/admin/get-user/${_id}`)

  approveUser = (_id: string): Observable<BackendResponse> => this.httpClient.patch<BackendResponse>
  (`${environment.backendUrl}/admin/approve-user/${_id}`, {})

  updateJobTitle = (_id: string, newJobTitle: string) : Observable<BackendResponse> => this.httpClient.patch<BackendResponse>
  (`${environment.backendUrl}/admin/update-job-title/${_id}`, {jobTitle: newJobTitle})
}
