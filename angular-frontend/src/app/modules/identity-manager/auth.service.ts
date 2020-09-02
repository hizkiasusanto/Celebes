import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  registerUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(`${environment.backendUrl}/users/register`, user, {headers})
  }

  authenticateUser = (user) => {
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(`${environment.backendUrl}/users/authenticate`, user, {headers})
  }

  getProfile = () => {
    return this.httpClient.get(`${environment.backendUrl}/users/profile`, {headers: this.addAuthorizedHeader()})
  }

  storeUserData = (token, user) => {
    localStorage.setItem('token',token)
    this.authToken = token;
    this.user = user;
  }

  loadToken = () => {
    this.authToken = localStorage.getItem('token')
  }

  logout = () => {
    this.authToken = null;
    this.user = null;

    localStorage.clear()
  }

  isLoggedIn = () => {
    this.loadToken();
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  addAuthorizedHeader = () => {
    this.loadToken();
    return new HttpHeaders({'Content-Type':'application/json', 'Authorization':this.authToken});
  }
}
