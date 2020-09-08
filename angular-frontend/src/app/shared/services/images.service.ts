import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {AuthService} from "../../modules/identity-manager/services/auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getProfilePicture(profilePicUrl: string) : string {
    return `${environment.profilePicDirectoryUrl}/${profilePicUrl}`
  }

  uploadProfilePicture(file: File) : Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('profilePicture', file, file.name);
    return this.httpClient.post(`${environment.backendUrl}/images/upload-profile-picture`,formData,
      {headers: this.authService.addAuthorizedHeaderNonJson(), reportProgress: true, observe: "events"})
  }
}
