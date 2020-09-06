import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../identity-manager/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  editProfile = (_id, newData) => this.http.patch(`${environment.backendUrl}/users/edit-profile/${_id}`,
    {newData: newData}, {headers:this.authService.addAuthorizedHeader()})
}
