import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../identity-manager/services/auth.service";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getAllUsers = (): Observable<BackendResponse> => this.httpClient.get<BackendResponse>
  (`${environment.backendUrl}/admin/get-all-users`, {headers: this.authService.addAuthorizedHeader()})

  getUserById = (_id: string): Observable<BackendResponse> => this.httpClient.get<BackendResponse>
  (`${environment.backendUrl}/admin/get-user/${_id}`, {headers: this.authService.addAuthorizedHeader()})

  approveUser = (_id: string): Observable<BackendResponse> => this.httpClient.patch<BackendResponse>
  (`${environment.backendUrl}/admin/approve-user/${_id}`, {}, {headers: this.authService.addAuthorizedHeader()})

  updateJobTitle = (_id: string, newJobTitle: string) : Observable<BackendResponse> => this.httpClient.patch<BackendResponse>
  (`${environment.backendUrl}/admin/update-job-title/${_id}`, {jobTitle: newJobTitle},
    {headers: this.authService.addAuthorizedHeader()})
}
