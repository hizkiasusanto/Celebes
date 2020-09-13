import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private httpClient: HttpClient) { }

  getProfilePicture(profilePicUrl: string) : string {
    return `${environment.profilePicDirectoryUrl}/${profilePicUrl}`
  }

  uploadProfilePicture(file: File) : Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('profilePicture', file, file.name);
    return this.httpClient.post(`${environment.backendUrl}/images/upload-profile-picture`,formData,
      {reportProgress: true, observe: "events"})
  }

  getInvoice(invoicePicUrl: string) : string {
    return `${environment.invoiceDirectoryUrl}/${invoicePicUrl}`
  }

  uploadInvoice(file: File) : Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('invoice', file, file.name);
    return this.httpClient.post(`${environment.backendUrl}/invoices/upload-invoice`,formData,
      {reportProgress:true, observe:"events"})
  }
}

export function requiredFileType( types: string[] ) {
  return function (control: FormControl) {
    const file = control.value;
    if ( file ) {
      const extension = file.name.split('.').pop();
      if ( types.map(type => type.toLowerCase()).includes(extension.toLowerCase()) ) {
        return null;
      }

      return {
        requiredFileType: true
      };
    }

    return {
      requiredFileType: true
    };
  };
}
