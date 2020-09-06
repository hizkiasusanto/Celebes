import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../identity-manager/services/auth.service";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {EditProfileData} from "../types/edit-profile-data";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  editProfile = (_id: string, newData: EditProfileData) : Observable<BackendResponse> =>
    this.http.patch<BackendResponse>(`${environment.backendUrl}/users/edit-profile/${_id}`,
    {newData: newData}, {headers:this.authService.addAuthorizedHeader()})
}
