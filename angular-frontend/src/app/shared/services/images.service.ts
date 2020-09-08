import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../modules/identity-manager/services/auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {BackendResponse} from "../types/backendresponse";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  uploadProfilePicture(file: File) : Observable<BackendResponse> {
    const formData = new FormData();
    formData.append('profilePicture', file, file.name);
    return this.httpClient.post<BackendResponse>(`${environment.backendUrl}/images/upload-profile-picture`,formData,
      {headers: this.authService.addAuthorizedHeaderNonJson()})
  }
}
