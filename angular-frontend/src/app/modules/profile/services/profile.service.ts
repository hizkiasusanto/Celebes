import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {BackendResponse} from "../../../shared/types/backendresponse";
import {EditProfileData} from "../types/edit-profile-data";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  editProfile = (_id: string, newData: EditProfileData) : Observable<BackendResponse> =>
    this.http.patch<BackendResponse>(`${environment.backendUrl}/users/edit-profile/${_id}`,
    {newData: newData})
}
