import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../identity-manager/auth.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  getAllUsers = () => this.httpClient.get(`${environment.backendUrl}/users/get-all-users`,
    {headers: this.authService.addAuthorizedHeader()})

  getUserById = (id) => this.httpClient.get(`${environment.backendUrl}/users/get-user/${id}`,
    {headers: this.authService.addAuthorizedHeader()})

  approveUser = (_id) => this.httpClient.patch(`${environment.backendUrl}/users/approve-user/${_id}`, {},
    {headers: this.authService.addAuthorizedHeader()})
}
